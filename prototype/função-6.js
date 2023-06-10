function adicao(x, y) {
    return x + y
}

function multiplicao(x, y) {
    return x * y
}

function calculadora(x, operacao, y) {
    console.log(operacao(x,y))
}

calculadora(10, adicao, 10)