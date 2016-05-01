var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chatbot'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/chatbot-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'chatbot'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/chatbot-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'chatbot'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/chatbot-production'
  }
};

module.exports = config[env];
