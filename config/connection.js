// mysql require

var mysql = require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'password',
    database: 'burgers_db'
});

//make the connection

connection.connect(function(err){
    if (err) {
        console.error('error connectng:' +err.stack);
    }
    console.log('connected as id' + connection.threadId)
});

//export the connection for use

module.exports = connection;