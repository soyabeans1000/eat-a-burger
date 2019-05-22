var mysql = require('mysql')

var connection;

// if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: 'sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'g705fr1c1woss4bd',
    password: 'g705fr1c1woss4bd',
    database: 'a8n15k71l54nqsi3'
  })

  console.log("connection")
// }

// else 
// {

//   connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'Reboot@2019',
//     database: 'burger_db'
//       })

}


//connection.connect()

module.exports = connection

