const lista = new Promise((resolve, eject) => {
    setTimeout(() => { const numeros = '1,5;10,15;20,25'
    resolve(numeros)
    }, 1000)
})

lista
.then((array) => array.split(';'))
.then((numero) => numero.map((numero) => {
    const [numero1, numero2] = numero.split(',')
    return {
        numero1,
        numero2
    }
}))
.then((lista) => console.log(lista))

