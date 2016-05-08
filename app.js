var express = require('express'),
    config = require('./config/config'),
    db = require('./app/models');

var app = express();

require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
    app.listen(config.port || 9000, function () {
      console.log('Express server started and listening on ' + this.address().port + ".");
    });
  }).catch(function (e) {
    throw new Error(e);
  });
