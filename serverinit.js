var api = require('./heartbeat.js');
var mysqlconnection = require('./mysqlconnection.js')

var app = api.createApp(mysqlconnection);

app.listen(3000);
