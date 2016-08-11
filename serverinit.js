var api = require('./heartbeat.js');
var mysqlconnection = require('./mysqlconnection.js');
var log = require('./backendlogs.js');

var app = api.createApp(mysqlconnection);

app.listen(process.env.PORT || 3000, function() {
  log.logInfo('Listening on port 3000');
});
