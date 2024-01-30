const mysql = require('mysql2');
const connection = mysql.createPool({
    host: '127.0.0.1',
	port: '3307',
    user: 'root',
    password: 'ARIAMbd?',
    database: 'banksimul08',
});
module.exports = connection;