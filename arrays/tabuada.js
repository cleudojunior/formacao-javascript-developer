const valores = [];
const numero = 10;
const tabuada = [];

for (let i = 0; i <= 10; i++) {
    valores.push(i);

    tabuada.push(valores[i] * numero);
}

console.log(tabuada);