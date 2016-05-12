var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    config = require('../../config/config');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {
      fb_app_id: config.fb_app_id,
      fb_page_id: config.fb_page_id
    });
});
