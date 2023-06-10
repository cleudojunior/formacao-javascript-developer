const pessoa = {
    idade: 18
}

const renan = {
    nome: 'renan',
    __proto__: pessoa
}

console.log(renan.idade)

