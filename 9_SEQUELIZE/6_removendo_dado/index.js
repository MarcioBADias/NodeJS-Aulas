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

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id
    await User.destroy({where: {id: id}})

    res.redirect('/')
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ raw: true, where: { id: id } })
    res.render('userview.handlebars', { user })
})

app.get('/', async (req, res) => {
    const users = await User.findAll({raw: true})
    res.render('home.handlebars', { users: users })
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))