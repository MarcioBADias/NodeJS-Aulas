const x = '8'

if (!Number.isInteger(x)){
    throw new Error('O valor não é um numero')
}

console.log('continuando o código')