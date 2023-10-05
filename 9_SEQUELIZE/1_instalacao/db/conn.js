const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectamos com sucesso usando Sequelize!')
}catch(err){
    console.log('Não foi possivel conectar:', err)
}

module.exports = sequelize