const usuario = {
    nome: 'Rainer',
    idade: 23,
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxa',
        foco: 'Programação',
        endereco:{
            rua: 'Rua Guilherme Gembala',
            numero: 260,
        }
    }
}

console.log(`${usuario.nome}, ${usuario.idade} anos, trabalha na empresa ${usuario.empresa.nome}, a cor da empresa é ${usuario.empresa.cor} e tem foco em ${usuario.empresa.foco}. Ela fica na ${usuario.empresa.endereco.rua} no número ${usuario.empresa.endereco.numero}`)