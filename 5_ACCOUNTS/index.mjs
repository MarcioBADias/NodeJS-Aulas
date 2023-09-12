import chalk from 'chalk'
import inquirer from 'inquirer'

import fs from 'fs'

const createAccount = () => {
    console.log(chalk.bgGreen.whiteBright(' Parabens por ter criado uma conta conosco! '))
    console.log(chalk.green(' Escolha seu tipo de conta: '))
    
    bildingAccount()
}

const bildingAccount = () => {
    inquirer.prompt([
        {
            name: 'accoountName',
            message: 'Digite um nome para sua conta:'
        }
    ])
    .then(answer => {
        const accoountName = answer.accoountName

        console.info(accoountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accoountName}.json`)){
            console.log(chalk.bgRed.black(`A conta ${accoountName} já existe, tente outro nome`))
            bildingAccount()
            return
        }

        fs.writeFileSync(
            `accounts/${accoountName}.json`, 
            '{balance: 0}',
            (err) => console.log(err))
        
        console.log(chalk.bgGreen.black(`Parabens ${accoountName}, sua conta foi criada com sucesso!`))
        operations()
    })
    .catch(err => console.log(err))
}

const operations = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: chalk.bgBlueBright(' Escolha uma operação abaixo: '),
            choices: [
                'Criar conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ])
    .then(answer => {
        const action = answer['action']
        if(action === 'Criar conta'){
            createAccount()
        }
    })
    .catch(err => console.log(err))
}

operations()