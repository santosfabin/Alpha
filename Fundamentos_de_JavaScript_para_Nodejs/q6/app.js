const { showHello } = require('./showPage.js')

const express = require('express')
const app = express()
const porta = 3000

app.get('/', (req, res) => {
  res.send(showHello())
})

app.listen(porta, () => {
  console.log(`Servidor está rodando em http://localhost:${porta}`)
})