const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 3000

const readFs = (req, res, readFile) => {
    fs.readFile(readFile, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
}

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const fileName = q.pathname.substring(1)
    const err404 = 'erro404.html'

    if(fileName.includes('html')){
        if(fs.existsSync(fileName)){
            readFs(req, res, fileName)
        }else{
            readFs(req, res, err404)
        }
    }else{
        readFs(req, res, err404)
    }


})

server.listen(port, () => {
    console.log(`O servidor está funcionando na porta ${port} com força total!`)
})