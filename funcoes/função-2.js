function escreverNome(name) {
    return 'Seu nome é:'+ name;
}

console.log(escreverNome('Cleudo'));

function calcularIdade(idade) {
    if (idade < 18) {
        return console.log('Você é menor de idade');
    } else {
        return console.log('Você é maior de idade');
    }
}

calcularIdade(17);