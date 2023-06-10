const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 11; i < 1000; i++) {
    lista.push(i)
}

const somaDeTodosOsNumeros = lista.reduce((previous, curremt) => previous + curremt)

console.log(somaDeTodosOsNumeros)