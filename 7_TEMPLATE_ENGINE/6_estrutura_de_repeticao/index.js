const express = require('express')
const { engine }  = require('express-handlebars')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const password = 'teste'
    res.render('dashboard', {password})
})

app.get('/', (req, res) => {
    const user = {
        name: "Marcio",
        age: 35
    }

    const password = 'teste'

    const auth = user.age > 17

    res.render('home', { user, password, auth })
})

app.listen(3000, () => {
    console.log('Servidor na porta 3000')
})
