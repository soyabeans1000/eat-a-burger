const db = require('../config')



module.exports = app => {
  

  //Get all Burgers
  app.get('/burgers', (req, res) => {
    
    db.query('SELECT * FROM burger_orders', (e, orders) => {
      if (e) throw e
      //res.json(orders)
      res.render('index', {orders} )
    }) 
    })


    //Get all Burgers
  app.get('*', (req, res) => {
    
    db.query('SELECT * FROM burger_orders', (e, orders) => {
      if (e) throw e
      //res.json(orders)
      res.render('index', {orders} )
    }) 
    })



}





