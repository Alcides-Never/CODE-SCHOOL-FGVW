// console.log("hello world");

// let nome = prompt("Digite o seu nome: ")
// console.log("Olá " + nome)


// Abaixo fará a validacação do valor 

// let prompt = require("prompt-sync")();

// let numero = prompt("Digite um número: ")


// if(numero == 5){
//     console.log("O número é 5")
// } else {
//     console.log("Errou! Esse número não é 5")
// }


// Abaixo calcula a média
console.log("exemplo 4")
let prompt = require("prompt-sync")();

let primeiraNota = parseFloat(prompt("Digite a primeira nota: "))
let segundaNota = parseFloat(prompt("Digite a segunda nota "))

let soma = primeiraNota + segundaNota

let media = soma / 2

console.log("A média é: " + media)