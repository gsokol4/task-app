const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 2, 3, 65])
    reject('things went wrong gg ff at 20')
  }, 2000)
})

doWorkPromise.then((result) => {
  console.log('Success! =>', result)
}).catch((error) => {
  console.log(error)
})
