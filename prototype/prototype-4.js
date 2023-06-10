

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
}

const renan = {
    genero: 'masculino'
}

Pessoa.call(renan, 'nome', 30)

console.log(renan)