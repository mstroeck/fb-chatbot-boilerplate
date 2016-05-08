var express = require('express'),
    router = express.Router(),
    config = require('../../config/config'),
    db = require('../models'),
    email_addresses = require('email-addresses'),
    bodyParser = require('body-parser')
    request = require('request')

module.exports = function (app) {
  app.use('/', router);
};

// for Facebook verification
router.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === config.verify_token) {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

router.post('/webhook/', function (req, res) {
    messaging_events = req.body.entry[0].messaging
    for (i = 0; i < messaging_events.length; i++) {
        event = req.body.entry[0].messaging[i]
        sender = event.sender.id
        if (event.message && event.message.text) {
            text = event.message.text
            sendTextMessage(sender, "Text received, echo: " + text.substring(0, 200))
        }
    }
    res.sendStatus(200)
})

function getUserName(sender) {
    request({
        url: 'https://graph.facebook.com/v2.6/' + sender,
        qs: {
            access_token: config.page_access_token,
            fields: "first_name,last_name"
        },
        method: 'GET',
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    }).on('data', function(data) {
        return JSON.parse(data)
    })
}

function sendTextMessage(sender, text) {
    messageData = {
        text:text
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:config.page_access_token},
        method: 'POST',
        json: {
            recipient: {id: sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}
