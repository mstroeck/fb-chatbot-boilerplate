var config = require('../../config/config'),
    request = require('request')

module.exports = {

    getUserName: function getUserName(sender) {
        request({
            url: 'https://graph.facebook.com/v2.6/' + sender,
            qs: {
                access_token: config.page_access_token,
                fields: "first_name,last_name"
            },
            method: 'GET'
        }, function(error, response, body) {
            if (error) {
                console.log('Error sending messages: ', error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            }
        }).on('data', function(data) {
            return JSON.parse(data)
        })
    },

    sendTextMessage: function sendTextMessage(sender, text) {
        messageData = {
            text:text
        }
        request({
            url: 'https://graph.facebook.com/v2.6/me/messages',
            qs: {access_token:config.page_access_token},
            method: 'POST',
            json: {
                recipient: {id: sender},
                message: messageData
            }
        }, function(error, response, body) {
            if (error) {
                console.log('Error sending messages: ', error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            }
        })
    }

};
