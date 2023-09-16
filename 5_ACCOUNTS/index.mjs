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
            message: 'Digite o nome da sua conta:'
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

const checkAccount = (accoountName) => {
    if(!fs.existsSync(`accounts/${accoountName}.json`)){
        console.log(chalk.bgRed.black(`A consta ${accoountName} não existe, escolha outro nome!`))
        return false
    }

    return true
}

const deposit = () => {
    inquirer.prompt([
        {
            name: 'accoountName',
            message: 'Digite o nome da conta a depositar:'
        }
    ])
    .then((answer) => {
        const accoountName = answer.accoountName

        if(!checkAccount(accoountName)){
            return deposit()
        }
        inquirer.prompt([
            {
                name: 'amount',
                message: `Olá ${accoountName}! Quanto voê deseja depositar?`
            }
        ])
        .then((answer) => {
            const amount = answer.amount
            addAmount(accoountName, amount)
            operations()
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

const addAmount = (accoountName, amount) => {
    const account = getAccount(accoountName)

    console.log(account)
}

const getAccount = (accoountName) => {
    const accoountJSON = fs.readFileSync(`accounts/${accoountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })
    console.log(accoountName)
    return JSON.parse(accoountJSON)
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
        
        switch (action) {
            case 'Criar conta':
                createAccount()
                break
            case 'Consultar Saldo':
                break
            case 'Depositar':
                deposit()
                break
            case 'Sacar':
                break
            case 'Sair':
                console.log(chalk.bgBlueBright.black('Obrigado por utilisar nosso banco!'))
                process.exit()
                break
            default:
                console.log('Selecione uma das opções acima')
        }
    })
    .catch(err => console.log(err))
}

operations()