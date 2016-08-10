var api = require('./heartbeat.js');
var mysqlconnection = require('./mysqlconnection.js')

var app = api.createApp(mysqlconnection);

app.listen(process.env.PORT || 3000);
console.log('listening to port: 3000');
