const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('contenty-Type', 'text/html')
    res.end(
        `<h1>Seja bem vindo ao meu primeiro server HTML!</h1>`
    )
})

server.listen(port, () => {
    console.log(`O servidor está funcionando na porta ${port} com força total!`)
})