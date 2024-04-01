let prompt = require("prompt-sync")()

let numero1 = prompt("Digite o primeiro numero: ")
let numero2 = prompt("Digite o segundo numero: ")
let numero3 = prompt("Digite o terceiro numero: ")

if(numero1<numero2 && numero2<numero3){
    console.log("A ordem passada é crescente!")
} else if(numero1>numero2 && numero2>numero3){
    console.log("A ordem é decrescente!")
} else{ 
    console.log("erro!!")
}