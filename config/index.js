var mysql = require('mysql')

var connection;

// /

  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Reboot@2019',
    database: 'burger_db'
      })

// }


//connection.connect()

module.exports = connection

