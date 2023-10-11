const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize