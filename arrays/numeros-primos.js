const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const par = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        par.push(numeros[i]);
    }
    
}

console.log(par);