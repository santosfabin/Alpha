const read = require('./readFile')

const nameFile = './text.txt'
const contentFile = read(nameFile)

if (contentFile != null){
  console.log(`Conteúdo do arquivo: ${contentFile}`)
}