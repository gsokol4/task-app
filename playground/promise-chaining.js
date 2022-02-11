require('../src/db/mongoose')
let Task = require('../src/models/task')

const deleteTaskById = (id) => {
  Task.findOneAndDelete({ _id: id }, (e, doc) => {
    if (e) {
      console.log(e)
    } else {
      console.log(`successfully deleted ${doc}`)
    }
  })
}

deleteTaskById('61ee33d2ad62e458027c3108')
