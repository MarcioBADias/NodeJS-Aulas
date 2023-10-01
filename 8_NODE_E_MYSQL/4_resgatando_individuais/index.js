const express = require('express')
const { engine } = require('express-handlebars')
// const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

    conn.query(query, (err, data) => {
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

    const query = `SELECT * FROM books WHERE id = ${id}`

    conn.query(query, (err, data) => {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]
        console.log(book)

        res.render('book.handlebars', { book })
    })
})

app.get('/', (req, res) => {
    res.render('home.handlebars')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(query, (err) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
}) 

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql1'
})

conn.connect((err) =>{
    if(err){
        console.log(err)
    }

    console.log('conecatado ao MySQL')
    app.listen(3000)
})
