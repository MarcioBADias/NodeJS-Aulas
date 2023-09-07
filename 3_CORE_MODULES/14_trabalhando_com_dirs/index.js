const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
    console.log('não existe a pasta!')
    fs.mkdirSync('minhapasta')
}else if(fs.existsSync('./minhapasta')){
    console.log('pasta já criada!')
}