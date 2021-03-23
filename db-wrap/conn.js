const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'root',
  password: '',
  database: 'actors'
});