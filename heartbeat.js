'use strict';

var db = require('./db.js');
var log = require('./backendlogs.js');
var express = require('express');

function createApp(connection) {
  var app = express();
  var bodyParser = require('body-parser');

  app.use(bodyParser.json());
  app.use(express.static('./client'));

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

  app.get('/heartbeat', function(req, res) {
    db.testDb(req, connection, function(error, response) {
      if (!error && response.length > 0) {
        log.logInfo('Connection established with database');
        res.status(200).send(response);
      } else {
        log.logError('Error connecting to database');
        res.status(500).json(error);
      }
    });
  });

  app.post('/api/log', function(req, res) {
    console.log(req.body);
    log.logger(req.body);
  });

  return app;
}

module.exports = {
  createApp: createApp
};
