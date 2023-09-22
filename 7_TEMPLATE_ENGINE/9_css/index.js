const express = require('express')
const exphbs  = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprendendo Node JS',
        category: 'backend',
        body: 'Nesse aprendizado voce vai poder...',
        coments: 4
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprendendo Node JS',
            category: 'backend',
            body: 'Nesse aprendizado voce vai poder...',
            coments: 4
        },
        {
            title: 'Aprendendo React',
            category: 'frontend',
            body: 'Nesse aprendizado voce vai poder...',
            coments: 9
        },
        {
            title: 'Aprendendo Next JS',
            category: 'frontend',
            body: 'Nesse aprendizado voce vai poder...',
            coments: 6
        },
        {
            title: 'Aprendendo JAVA',
            category: 'backend',
            body: 'Nesse aprendizado voce vai poder...',
            coments: 2
        }
    ]

    res.render('blog', {posts})
})

app.get('/dashboard', (req, res) => {
    const password = 'teste'
    const itens = ['item 01', 'item 02', 'item 03']
    res.render('dashboard', {password, itens})
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
