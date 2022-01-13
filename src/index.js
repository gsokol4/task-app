const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
  const person = new User({ name: 'doggo', email: 'doggo@gmail.com', password: 'IamAGoodBoi#3', age: 3 })

  person.save().then(() => {
    res.send(person)
  }).catch(() => {

  })
})

app.listen(port, () => {
  console.log('index.js has started on' + port)
})
