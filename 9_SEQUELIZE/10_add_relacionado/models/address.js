const { DataTypes } = require('sequelize')
const conn = require('../db/conn')
const User = require('./User')

const Address = conn.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

Address.belongsTo(User)

module.exports = Address