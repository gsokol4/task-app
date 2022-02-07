const { type } = require("express/lib/response")

// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([1, 2, 3, 65])
//     reject('things went wrong gg ff at 20')
//   }, 2000)
// })

// doWorkPromise.then((result) => {
//   console.log('Success! =>', result)
// }).catch((error) => {
//   console.log(error)
// })

const add = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 === 5) {
      reject('wow 5 is gayyyy gtfo. wut why is 5 gayI don\'t know wth get out soo gay')
    }
    setTimeout(() => {
      resolve(num1 + num2)
    }, 2000)
  })
}

add(2, 3).then((result) => {
  return add(result, 10)
}).then((result2) => {
  return add(result2, 10)
}).then((result3) => {
  console.log(result3)
}).catch((e) => { console.log(e) })
