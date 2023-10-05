const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./db/conn')
const User = require('./models/User')

const app = express()

app.engine('handlebars', engine())
app.set('views engine', 'handlebars')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/users/create', (req, res) => {
    res.render('addUser.handlebars')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
    const newsletterChecked = newsletter === 'on'

    newsletterChecked ? newsletter = true : newsletter = false

    await User.create({ name, occupation, newsletter })

    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home.handlebars')
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))