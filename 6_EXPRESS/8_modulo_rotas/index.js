const express = require('express')
const app = express()
const port = 3000
const usersRouter = require('./users')
const path = require('path')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

