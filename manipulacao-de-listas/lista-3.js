class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('Vitor'), new Pessoa('José')]

const listaNomes = lista.map((element) => element.name)

console.log(listaNomes)