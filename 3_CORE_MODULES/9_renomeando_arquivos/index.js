const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novo arquivo.txt'

fs.rename(arqAntigo, arqNovo, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log(`O arquivo "${arqAntigo}" foi renomeado para "${arqNovo}"!`)
})