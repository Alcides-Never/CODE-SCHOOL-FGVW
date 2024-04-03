let prompt = require("prompt-sync")()

let peso = parseFloat(prompt("informe o peso: "))
let altura = parseFloat(prompt("informe a altura em metro: "))

let imc = (peso / (altura*altura))

// if(imc<18.5){
//     console.log("Abaixo do peso")
// } else if(imc >= 18.5 && imc <= 24.9){
//     console.log("Peso normal")
// } else if(imc >= 25 && imc <= 29.9 ){
//     console.log("Sobrepeso")
// } else if(imc >= 30 && imc <= 34.9 ){
//     console.log("Obesidade Grau 1")
// }else if(imc >= 35 && imc <= 39.9){
//     console.log("Obesidade Grau 2")
// }else {
//     console.log("Obesidade Grau 3")
// }

switch(true){
    case imc<18.5:
        console.log("Abaixo do peso")
    break;
    case imc >= 18.5 && imc <= 24.9:
        console.log("Peso Normal")
    break;
    case imc >= 25 && imc <= 29.9:
        console.log("Sobrepeso")
    break;
    case imc >= 30 && imc <= 34.9:
        console.log("Obesidade Grau 1")
    break;
    case imc >= 35 && imc <= 39.9:
        console.log("Obseidade Grau 2")
    break;
    case imc >= 40:
        console.log("Obesidade Grau 3")
    break;
    default:
        console.log("Dados inválidos")
    break;
}