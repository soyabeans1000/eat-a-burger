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

    


      app.post('/burgers/:id', (req, res) => {
        // db.query('UPDATE users SET ? WHERE ?', [req.body, { id: req.params.id }], e => {
        //   if (e) throw e
        //   res.send('ok')
        // })

        console.log("Updating now")

      })



}





