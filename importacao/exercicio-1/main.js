const {gets, print} = require('./funcoes-auxiliares');
const resultado = []

for (let i = 0; i < 3; i++) {
    const medias = gets();
    resultado.push(medias)
    
}

print(resultado)