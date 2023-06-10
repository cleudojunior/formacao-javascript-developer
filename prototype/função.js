function falarMeuNome() {
    console.log('Meu nome é Cleudo')
}

function falarMeuNomeCompleto() {
    falarMeuNome()
    console.log('Junior')
    return falarMeuNome
}

falarMeuNomeCompleto()()