function time(){
  console.clear();
  const now = new Date()

  const hour = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  const date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`

  console.log(`hora: ${hour}\ndata: ${date}`)

}

setInterval(time, 1000)