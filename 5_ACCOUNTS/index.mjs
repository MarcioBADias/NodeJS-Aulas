import chalk from 'chalk'
import inquirer from 'inquirer'

import fs from 'fs'

const operations = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Escolha uma operação abaixo:',
            choices: [
                'Criar conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ])
    .then()
    .catch(err => console.log(err))
}

operations()