

const promessaNumeroQualquer = new Promise((resolve, eject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 10000)
})

promessaNumeroQualquer
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('Finalizou')
})