const express = require('express')
const { engine } = require('express-handlebars')
const pool = require('./db/conn')

const app = express()

app.engine('handlebars', engine())
app.set('views engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books'

    pool.query(query, (err, data) => {
        if(err){
            console.log(err)
            return
        }

        const books = data
        
        res.render('books.handlebars', { books })
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(query, data, (err, data) => {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book.handlebars', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(query, data, (err, data) => {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbook.handlebars', { book })
    })
})

app.get('/', (req, res) => {
    res.render('home.handlebars')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `INSERT INTO books (??, ??) VALUES (?, ?)`

    const data = ['title', 'pageqty', title, pageqty]

    pool.query(query, data, (err) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
}) 

app.post('/books/uptadebook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`

    const data = ['title', title, 'pageqty', pageqty, 'id', id]

    pool.query(query, data, err => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.post('/books/delete/:id', (req, res) => {
    const id = req.params.id

    const query = `DELETE FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(query, data, (err) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.listen(3000)
