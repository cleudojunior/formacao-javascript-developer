class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc() {
        return this.peso / (this.altura**2);
    }

    classificaImc() {
        if (this.calculaImc <= 20) {
            return `${this.nome} está abaixo do peso`
        } else {
            return `${this.nome} está acima do peso`
        }
    }
}

const Jose = new Pessoa('jose', 70, 1.70);
console.log(Jose)
console.log(Jose.calculaImc().toFixed(2))
console.log(Jose.classificaImc())