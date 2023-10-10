const { DataTypes } = require('sequelize')
const conn = require('../db/conn')
const User = conn.define('User', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = User