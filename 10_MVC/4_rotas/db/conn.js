const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mvc1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('conectamos ao banco')
} catch (err) {
    console.log(err)
}

module.exports = sequelize