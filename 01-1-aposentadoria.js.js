let nome = "Rainer"
let sexo = "M"
let idade = 10
let contribuicao = 35

let total = idade + contribuicao

if(sexo=="M" && contribuicao>=35 && total>=95){
    console.log(`${nome}, voce pode se aposentar!`)
}
else if(sexo=="F" && contribuicao>=30 && contribuicao+idade>=85){
    console.log(`${nome}, voce pode se aposentar!`)
}
else{
    var naopode
    if(sexo==="M"){
        naopode = 95 - total
    }else{
        naopode = 85 - total
    }
    console.log(`${nome}, voce não pode, ainda faltam ${naopode} anos para se aposentar.`)
}