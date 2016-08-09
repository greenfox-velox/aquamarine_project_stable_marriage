'use strict';

var config = require('./config.js');

var serverQueries = {
  getHeartbeat: 'SELECT * FROM heartbeat'
};

var foo = (function() {
  function testDb(data, connection, callback) {
    connection.query(serverQueries.getHeartbeat, function(err, rows) {
      callback(err, rows);
    });
  }
  return {testDb: testDb};
})();

module.exports = foo;
