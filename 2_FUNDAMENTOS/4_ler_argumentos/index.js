//nome

// console.log(process.argv)

/*
Apos digitar "node [CAMINHO] ['nome=Marcio' 'idade=35']" conforme a questão orienta, há o retorno de um 
array com os caminhos e no final com cada argumento em uma posição posterior ao outro
*/

const args = process.argv.slice(2)
// console.log(args)

/*
Com slice cortamos o array criando um array com os argumentos da posição 2 em diante:
['nome=Marcio','idade=35']
*/

const nome = args[0].split('=')[1]
// console.log(nome)

/*
com SPLIT na posição 0 e tirando o parametro '=' teremos novo array [nome, Marcio] 
Com a posição 1 no SPLIT pegamos apenas o 'Marcio'
*/

const idade = args[1].split('=')[1]
// console.log(idade)

console.log(`Nome: ${nome}, idade: ${idade}`)