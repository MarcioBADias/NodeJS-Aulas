const path = require('path')

// PATH ABSOLUTO
console.log(path.resolve('teste.txt'))

//FORMAR PATH
const midFolder = 'relatorios'
const fileName = 'Marcio.txt'

const finalPath = path.join('/', 'arquivo', midFolder, fileName)

console.log(finalPath)