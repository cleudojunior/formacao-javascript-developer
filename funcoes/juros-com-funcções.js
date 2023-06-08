function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto/100));
}

function definirDesconto(forma) {
    if (forma == 1) {
        return 15
    } else if (forma == 2) {
        return 10
    } else if ( forma == 3) {
        return 0
    } else {
        return -10
    }
}

console.log(aplicarDesconto(10, definirDesconto(4)))