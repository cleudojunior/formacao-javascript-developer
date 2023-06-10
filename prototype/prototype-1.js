function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`meu nome é ${this.nome}`)
}

const renan = new Pessoa('renan', 30)

renan.falar()

class Pessoa {

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}