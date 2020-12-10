const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },

    {
        nome: "Jasmine",
        tecnologias: [
            "JavaScript",
            "CSS"
        ]
    },

    {
        nome: "Tuane",
        tecnologias: [
            "HTML",
            " Node.js"
        ]
    }
];

for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

function checaSeUsuarioUsaCSS(tecnologias) {

    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    for (let i = 0; i < tecnologias.length; i++) {
        // SE encontrar, retorne true da função, caso contrário retorne false
        if (tecnologias[i] === "CSS") return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    let checa = checaSeUsuarioUsaCSS(usuarios[i].tecnologias)

    if (checa === true) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    } else {
        console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`)

    }
}

