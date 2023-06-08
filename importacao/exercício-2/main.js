const {gets, print} = require('./funcoes-auxiliares');
const quantidadeDeValores = gets();
let valor = [0, 0];

for (let i = 0; i < quantidadeDeValores; i++) {
    const numero = gets();
    if(numero > valor[0] && numero % 2 == 0) {
        valor[0] = numero;
    } else if (valor[1] === 0 || numero < valor[1] && numero % 2 != 0) {
            valor[1] = numero;
        }
}



print(`Maior numero par é:${valor[0]} 
Menor numero impar é:${valor[1]}`)