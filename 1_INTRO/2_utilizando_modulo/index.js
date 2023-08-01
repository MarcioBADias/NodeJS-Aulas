const fs = require('fs') //File System

fs.readFile('apoio.txt','utf-8', (err, data) => {
    if(err){
        console.log(err)
        return
    }

    console.log(data)
})