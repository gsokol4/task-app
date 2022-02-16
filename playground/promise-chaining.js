require('../src/db/mongoose')
const { ReturnDocument } = require('mongoose/node_modules/mongodb')
let Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
  const deletedItem = await Task.findOneAndDelete({ _id: id })
  console.log(deletedItem)
  const count = await Task.find({ incomplete: false }).count()
  return count
}

deleteTaskAndCount('61ee37684e4a2c8985e2bb33').then((count) => {
  console.log(count)
}).catch((e) => {
  throw new Error(`an error occured: ${e}`)
})

// const deleteTaskById = (id) => {
//   return new Promise((resolve, reject) => {
//     Task.findOneAndDelete({ _id: id }, (e, doc) => {
//       if (e) {
//         reject(e)
//       } else {
//         resolve(`successfully deleted ${doc}`)
//       }
//     })
//   })
// }

// deleteTaskById('61ee33d2ad62e458027c3108')

// const listAllUncompletedTasks = () => {
//   return new Promise((resolve, reject) => {
//     Task.find({ completed: false }, (e, docs) => {
//       if (e) {
//         reject(new Error(`an error occured: ${e}`))
//       } else {
//         resolve(docs)
//       }
//     })
//   })
// }

// listAllUncompletedTasks().then((res) => {
//   console.log(res)
//   return deleteTaskById('61ee33fdad62e458027c310a')
// }).then((delVal) => {
//   console.log(delVal)
// }).catch((e) => {
//   console.log(e)
// })
