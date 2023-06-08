const {gets, print} = require('./funcoes-auxiliares');
const salarioBruto = gets();
const adicional = gets();

function calcularPorcentagem(salario, porcentagem){
    return salario * porcentagem;
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 0.95;
    } else if (salario >= 1100.1 && salario <= 2500) {
        return 0.90;
    } else {
        return 0.85;
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto);
const impostoDescontado = calcularPorcentagem(salarioBruto, aliquotaImposto); 

function calcularValorFinal() {
    const valorFinal = impostoDescontado + adicional;
    return valorFinal;
}

console.log(calcularValorFinal());

