const { createConnection } = require('mysql2')


module.exports = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Reboot@2019',
  database: 'burger_db'
})
