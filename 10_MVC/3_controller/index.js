const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./db/conn')

const Task = require('./models/Task')

const app = express()

app.engine('handlebars', engine())
app.set('viwes engine', 'handlebars')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

conn
    .sync()
    .then(()=>{
        app.listen(3000)
    })
    .catch(err => console.log(err))