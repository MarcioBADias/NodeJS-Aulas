const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./db/conn')
const User = require('./models/User')

const app = express()

app.engine('handlebars', engine())
app.set('views engine', 'handlebars')
app.use(express.static('public'))
// app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.render('home.handlebars')
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))