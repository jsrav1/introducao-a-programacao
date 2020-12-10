const nome = "Rainer"
const peso = 105
const altura = 1.83

imc = peso/(altura*altura)

if(imc>=30){
    console.log(`${nome}, voce está acima do peso`)
}else{
    console.log(`${nome}, voce não está acima do peso`)
}