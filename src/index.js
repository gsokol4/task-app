const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('yoink it works')
// })

app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.send(users)
  }).catch(() => {
    res.status(500).send()
  })
})

app.get('/users/:id', (req, res) => {
  console.log(req.params)
  const id = req.params.id

  User.findById(id).then((personObject) => {
    if (!personObject) {
      console.log('there is no person object')
      return res.status(404).send()
    }
    res.send(personObject)
  }).catch((e) => {
    res.send(e)
  })
})

app.post('/users', (req, res) => {
  const person = new User(req.body)

  person.save().then(() => {
    res.status(201).send(person)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.get('/task', (req, res) => {
  Task.find({}).then((tasks) => {
    res.send(tasks)
  }).catch((e) => {
    res.status(500).send()
  })
})

app.get('/task/:id', (req, res) => {
  console.log(req.body)
  const id = req.params.id
  console.log(req.params)

  Task.findById(id).then(
    (task) => {
      if (!task) {
        return res.sendStatus(404)
      }
      res.send(task)
    }
  ).catch(
    (e) => {
      res.status(500).send(e)
    }
  )
})

app.post('/task', (req, res) => {
  const task = new Task(req.body)
  console.log(task)
  task.save().then(() => {
    res.status(201).send(task)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.listen(port, () => {
  console.log('index.js has started on' + port)
})
