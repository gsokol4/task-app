const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
// const ObjectId = mongodb.ObjectId
const { ObjectId, MongoClient } = mongodb

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }
  console.log('connected correctly!')
  const db = client.db(databaseName)

  // const update = db.collection('users').updateOne({
  //   _id: new ObjectId('61b02d8e212798dc509937c6')
  // }, {
  //   $inc: {
  //     age: 10
  //   }
  // }
  // ).then((success) => {
  //   console.log(success)
  // })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  let toggle = true
  const falseOrTrue = () => {
    toggle = !toggle
    return toggle
  }
  db.collection('tasks').updateMany({ completed: false }, { $set: { completed: true } })
    .then((success) => { console.log(success) })
    .catch((error) => { console.log(error) })
})
