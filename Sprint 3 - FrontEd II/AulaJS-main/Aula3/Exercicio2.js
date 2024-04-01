let prompt = require("prompt-sync")()

let numero =  prompt("Escolha um número entre 1 e 7: ")

switch (numero){
    case "1": 
    console.log("Segunda-Feira")
    break;
    case "2": 
    console.log("Terça-Feira")
    break;
    case "3": 
    console.log("Quarta-Feira")
    break;
    case "4": 
    console.log("Quinta-Feira")
    break;
    case "5": 
    console.log("Sexta-Feira")
    break;
    case "6": 
    console.log("Sábado")
    break;
    case "7": 
    console.log("Domingo")
    break;
    default: 
    console.log("Número inexistente! Digite o número entre 1 e 7")
    break;
}