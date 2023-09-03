const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Advinhe qual é minha linguagem de programação favorita?', (language) => {
    if(language === 'JavaScript'){
        console.log(`ACERTOU! Minha linguagem de programação preferida é ${language}.`)
    }else{
        console.log(`Não!Tente de novo, mas dessa vez nada de ${language} hem?`)
    }
    readline.close()
})
