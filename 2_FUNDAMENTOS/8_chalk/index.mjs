import chalk from 'chalk'

const nota = 3


if(nota >= 7){
    console.log(chalk.green(`Parabéns você foi aprovado! Sua nota foi ${nota}.`))
}else{
    console.log(chalk.red(`Que pena, você não foi aprovado, sua nota foi ${nota}.`))
}