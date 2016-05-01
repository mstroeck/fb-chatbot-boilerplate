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
    db: 'postgres://beavr_prdctn_u:hightail-vermeil-jeep-nostrum-cuba-omega@beavr-prdctn.cfiqbxj1zyb4.eu-west-1.rds.amazonaws.com/chancenreich'
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
