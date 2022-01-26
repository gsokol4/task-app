const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
})

// const User = mongoose.model('Person', {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// })

// const me = new User({
//   name: 'Donotello',
//   age: 25
// })

// me.save().then(
//   () => { console.log(me) }
// ).catch(
//   (error) => { console.log('error:', error) }
// )
