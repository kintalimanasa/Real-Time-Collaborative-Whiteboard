// server/db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
});

module.exports = db;