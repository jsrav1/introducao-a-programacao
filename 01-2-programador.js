programador = {

    usuario: [
        {nome: 'Rainer', idade: 23, local: 'Dublin'},
        {nome: 'Vinicius', idade: 22, local: 'São Paulo'},
        {nome: 'Kamilly', idade: 20, local: 'Dublin'},
    ],

    tecnologias: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
]
}

console.log(`O usuário ${programador.usuario[0].nome} tem ${programador.usuario[0].idade} anos, mora em ${programador.usuario[0].local} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}. Sua namorada ${programador.usuario[2].nome} também programadora, ${programador.usuario[2].idade} anos, mora em ${programador.usuario[2].local} e usa a tecnologia ${programador.tecnologias[2].nome} com especialidade em ${programador.tecnologias[2].especialidade}. Os dois juntos vão esperar se mudar para Dublin seu amigo ${programador.usuario[1].nome} que tem ${programador.usuario[1].idade} anos, morador de ${programador.usuario[1].local} que também é programador e utiliza a tecnologia ${programador.tecnologias[1].nome} com especialidade em ${programador.tecnologias[1].especialidade}.`)