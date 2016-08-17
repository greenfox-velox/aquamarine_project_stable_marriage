var dotenv = require('dotenv');
dotenv.load();

var data = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  default_log_lvl: process.env.DEFAULT_LOG_LVL,
  loglevels: process.env.LOGLEVELS
};

module.exports = data;
