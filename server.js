const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

require('./routes')(app)


console.log('inside server')
require('./config').connect(_ => { app.listen(3000)
console.log('connection suces') })
