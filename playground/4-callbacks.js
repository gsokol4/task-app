const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback('error', undefined)
    // callback(undefined, 'sucsess')
  }, 2000)
}

doWorkCallback((error, result) => {
  if (error) { return console.log(error) }
  console.log(result)
})
