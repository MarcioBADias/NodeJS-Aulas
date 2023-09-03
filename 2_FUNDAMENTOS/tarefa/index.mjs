import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer
    .prompt([{
        name:'Q1',
        message: 'Digite seu nome'
    },
    {
        name:'Q2',
        message: 'Digite sua idade'
    }])
    .then((answer) =>{
        console.log(chalk.bgYellow.black(`Prazer ${answer.Q1}! Quem bom saber que tem ${answer.Q2} anos!`))
    })
    .catch((err) => {
        console.log(`Erro: ${err}`)
    })