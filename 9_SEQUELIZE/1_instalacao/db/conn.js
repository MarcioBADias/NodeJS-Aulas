const { sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
}catch(err){
    console.log('Não foi possivel conectar:', error)
}

molude.exports = sequelize