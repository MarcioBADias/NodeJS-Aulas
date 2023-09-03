import chalk from 'chalk'

const nota = 8


if(nota >= 7){
    console.log(chalk.bgGreen(`Parabéns você foi aprovado! Sua nota foi ${nota}.`))
}else{
    console.log(chalk.bgRed(`Que pena, você não foi aprovado, sua nota foi ${nota}.`))
}