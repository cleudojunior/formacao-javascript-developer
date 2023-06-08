class Carro {
    marca;
    cor;
    gastomedio;
    combustível;

    constructor(marca, cor, gasto, distancia, combustível) {
        this.marca = marca
        this.cor = cor
        this.gastomedio = gasto/distancia
        this.combustível = combustível
    }

    definirCombustível() {
        if (this.combustível == 'Gasolina') {
           return 5.60
        } else {
           return 0
        }
    }

    calcularGasto(distancia) {
        return this.gastomedio * distancia * this.definirCombustível();
    }
}

const uno = new Carro('Fiat', 'Vermelho', 10, 100, 'Gasolina');
console.log(uno.calcularGasto(50));

const palio = new Carro('Fiat', 'Preto', 1, 10, 'Gasolina');
console.log(palio.calcularGasto(70).toFixed(2));