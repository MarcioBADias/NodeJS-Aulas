const express = require('express')
const { engine } = require('express-handlebars')
// const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', engine())
app.set('views engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
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
