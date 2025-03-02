const express = require('express')
const path = require('path')

const app = express()
const porta = 3000

app.use(express.static(path.join(__dirname, 'src')));

app.listen(porta, () => {
  console.log(`Servidor está rodando em http://localhost:${porta}`)
})

