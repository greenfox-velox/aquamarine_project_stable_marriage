var dotenv = require('dotenv');
dotenv.load();

<<<<<<< HEAD
var config = {
=======
var data = {
>>>>>>> ef7e1270e59113027ad8742935d23fc6f002d2a9
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

<<<<<<< HEAD
module.exports = config;
=======
module.exports = data;
>>>>>>> ef7e1270e59113027ad8742935d23fc6f002d2a9
