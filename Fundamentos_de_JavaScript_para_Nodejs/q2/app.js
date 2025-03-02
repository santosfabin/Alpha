import {readFile} from './readFile.js'

const nameFile = './text.txt'
const contentFile = readFile(nameFile)

if (contentFile != null){
  console.log(`Conteúdo do arquivo: ${contentFile}`)
}