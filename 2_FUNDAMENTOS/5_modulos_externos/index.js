const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
// console.log(args)

const name = args['name']
const profissao = args['profissao']
console.log(`Ola! Me chamo ${name} e sou ${profissao}.`)