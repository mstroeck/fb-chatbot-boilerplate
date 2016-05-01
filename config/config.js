var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

if (!process.env.IS_HEROKU) {
    var dotenv = require('dotenv').config({path: rootPath + '/.env'});
}

var config = {
    root: rootPath,
    app: {
      name: 'chatbot'
    },
    port: process.env.PORT || 3000,
    db: process.env.DB_CONNECTION_STRING || '',
    page_access_token: process.env.PAGE_ACCESS_TOKEN || '',
    verify_token: process.env.VERIFY_TOCKEN || ''
  };

module.exports = config;
