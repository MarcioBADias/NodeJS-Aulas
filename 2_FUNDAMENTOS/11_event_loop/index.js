function a() {
    console.log('executando a')
}

function b() {
    console.log('executando b')
}

function c() {
    console.log('executando c')
    b()
    a()
}

c()