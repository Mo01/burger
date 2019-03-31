// Set up MySQL connection.
var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'Completeview!',
	database: 'burgers_db'
});

// Connect to JAWSDB if it exists
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id: ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
