const db = require('../config')

module.exports = app => {
  //Get all Burgers
  app.get('/burgers', (req, res) => {

    db.query('SELECT * FROM burger_orders', (e, orders) => {
      if (e) throw e
      res.render('index', { orders })
    })
  })

  //Catch all routes toerh
  app.get('*', (req, res) => {

    db.query('SELECT * FROM burger_orders', (e, orders) => {
      if (e) throw e
      res.render('index', { orders })
    })
  })


// Add New Burger Order
app.post('/burgers', (req, res) => {   
  db.query(`INSERT INTO burger_orders SET ?`, req.body, e => {
    if (e) throw e

    console.log("Burger Added!")
    res.send('ok')
  })
})

  // Update
  app.put('/burgers/:id', (req, res) => {   
    db.query(`UPDATE burger_orders SET eaten = true WHERE burgerID = ${req.params.id}`, e => {
      if (e) throw e
      res.send('ok')
    })
  })
}
