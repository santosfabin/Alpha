const express = require('express')
const path = require('path')
const { exec } = require('child_process')
const { stderr } = require('process')

const app = express()
const porta = 3000

app.use(express.static(path.join(__dirname, 'public')));


const file = "./public/lorem.txt"

app.get('/content', (req, res) => {
  exec('cat ./public/index.html', (e, stdout, stderr) => {
    if(e) {
      console.error(`Erro ao executar o comando ${e.message}`)
      return
    }
    res.json(stdout)

    if(stderr) {
      console.error(`Erro no comando:\n${stderr}`)
    }

  })
})

app.get('/nameFunction', (req, res) => {
  exec('pwd', (e, stdout, stderr) => {
    if(e) {
      console.error(`Erro ao executar o comando ${e.message}`)
      return
    }
    res.json(stdout)

    if(stderr) {
      console.error(`Erro no comando:\n${stderr}`)
    }

  })
})

app.listen(porta, () => {
  console.log(`Servidor está rodando em http://localhost:${porta}`)
})

