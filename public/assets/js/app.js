const { fetch, alert } = window

document.addEventListener('click', e => {
    e.preventDefault()
    //if trash button clicked
    if (e.target.className === 'fas fa-concierge-bell') {

        let burgerID = e.target.getAttribute('data-id')
    

    let newValues = {}

    newValues.eaten = 'true'
   
      fetch(`/burgers/${burgerID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newValues)
      })
        .then(_ => {
         location.reload()
        })
        .catch(e => console.error(e))

   }
    
})
    




