const {DataTypes} = require('sequelize')
const conn = require('../db/conn')

const Task = conn.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
})

module.exports = Task