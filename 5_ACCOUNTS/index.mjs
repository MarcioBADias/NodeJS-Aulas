import chalk from 'chalk'
import inquirer from 'inquirer'

import fs from 'fs'

const createAccount = () => {
    console.log(chalk.bgGreen.whiteBright(' Parabens por ter criado uma conta conosco! '))
    console.log(chalk.green(' Escolha seu tipo de conta: '))
    
    bildingAccount()
}

const bildingAccount = () => {-
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
            '{"balance": 0}',
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
            
            console.log(chalk.bgGreen(
                `Foi depositado o valor de R$${amount} na sua conta! Obrigado ${accoountName}!`
            ))
            operations()
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

const addAmount = (accoountName, amount) => {
    const accountData = getAccount(accoountName)

    if(!amount){
        console.log(
            chalk.bgRed.black(`Ops, ${accoountName}! Acho que esqueceu de digitar o valor, tente novamente?`)
            )
        return deposit()
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accoountName}.json`,
        JSON.stringify(accountData),
        (err) => console.log(err)
        )
}

const widthDrawAmount = (accountName, amount) => {
    const accountData = getAccount(accountName)

        if(!amount){
            console.log(chalk.bgRed.black(`Ops, ${accountName}! Acho que esqueceu de digitar o valor, tente novamente?`))
            return widthDraw()
        }

        if(amount > accountData.balance){
            console.log(chalk.bgRed.black(`Saldo indisponível.`))
            return widthDraw()
        }

        accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            JSON.stringify(accountData),
            (err) => console.log(err)
             )
}

const getAccount = (accoountName) => {
    const accoountJSON = fs.readFileSync(`accounts/${accoountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })
    return JSON.parse(accoountJSON)
}

const getAccountBalance = () => {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite o nome da sua conta:'
        }
    ])
    .then(answer => {
        const accountName = answer.accountName

        if(!checkAccount(accountName)){
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgGreen(
            `Olá ${accountName}! Seu saldo atual é de ${accountData.balance} reais.`
        ))

        operations()
    })
    .catch(err => console.log(err))
}

const widthDraw = () => {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite o nome da sua conta:'
        }
    ])
    .then(answer => {
        const accountName = answer.accountName

        if(!checkAccount(accountName)){
            return widthDraw()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: `Ola ${accountName}! Quando deseja sacar?`
            }
        ]).then(answer => {
            const amount = answer.amount

            widthDrawAmount(accountName, amount)
            console.log(
                chalk.bgGreen(
                    `${accountName}, seu saque de ${amount} foi realziado com sucesso. Seu saldo em conta atual é de ${accountData.balance}`
                ))
            operations()
        }).catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

const transf = () => {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite o nome da sua conta:'
        }
    ])
    .then(answer => {
        const accountName = answer.accountName

        if(!checkAccount(accountName)){
            return transf()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: `Olá ${accountName}! Qual valor deseja transferir?`
            }
        ])
        .then(answer => {
            const amount = answer.amount

            widthDrawAmount(accountName, amount)
            inquirer.prompt([
                {
                    name: 'accountName',
                    message: `Digite o nome da conta que deseja depositar ${amount} reais?`
                }
            ]).then(answer => {
                const accountName = answer.accountName

                if(!checkAccount(accountName)){
                    console.log(chalk.bgRed(`A conta ${accountName} não existe em nosso sistema ou está errada, tente novamente mais tarde`))
                    transf()
                }
                addAmount(accountName, amount)
                operations()
            })
        })
        .catch(err => console.log(err))
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
                'Transferir',
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
                getAccountBalance()
                break
            case 'Transferir':
                transf()
                break
            case 'Depositar':
                deposit()
                break
            case 'Sacar':
                widthDraw()
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