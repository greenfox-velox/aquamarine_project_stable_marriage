var api = require('../heartbeat.js');
var request = require('supertest');
var tape = require('tape');
var mockConnection = require('./mockconnection.js')

tape('Get method response status is 200, content type is json', function(t) {
  var app = api.createApp(mockConnection.mockConnectionMoreItems);
  request(app)
    .get('/heartbeat')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) {
        t.fail();
      } else {
        t.equal(res.body.length, 3);
        t.end();
      }
    });
});

tape('Get method responses error when receives error', function(t) {
  var app = api.createApp(mockConnection.mockConnectionMoreItemsError);
  request(app)
    .get('/heartbeat')
    .expect('Content-Type', /json/)
    .expect(500)
    .end(function(err, res) {
      if (err) {
        t.fail();
      } else {
        t.end();
      };
    });
});
