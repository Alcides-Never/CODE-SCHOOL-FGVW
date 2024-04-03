
// Exercicio 1: 

// let prompt = require("prompt-sync")();

// let nome = prompt("Digite o nome: ")
// let cargo = prompt("Digite o cargo: ")
// let salario = parseFloat(prompt("Digite o salario: "))

// if (salario < 1000){
//     let calculo = ((10*salario)/100) + salario;
//     console.log("Nome: " + nome) ;
//     console.log("Cargo: " + cargo) ;
//     console.log("Salario Reajustado: R$" + calculo.tofixed(2))
//     console.log("Salario ${calculo.}}tofixed(2)`")  -- Outra forma de declarar variável

// }


// Exercicio 2: 

// let prompt = require("prompt-sync")();

// let salario = parseFloat(prompt("Digite o seu salário: "))

// if (salario < 500){
//     let calculo = ((30*salario)/100) + salario;
//     console.log("Salario reajustado R$" + calculo)
// } else {
//     // console.log("Sem direito")
//     console.log(`Seu salario é de R$${salario}, logo não terá direito`)
// }



// Exercicio 3

// let prompt = require("prompt-sync")();

// let valor = parseInt(prompt("Digite o numero: "))

// if ( valor > 0){
//     console.log("positivo")
// } else if (valor < 0){
//     console.log("negativo")
// } else {
//     console.log("Zero vale nada")
// }


// Exercicio 4

// let prompt = require("prompt-sync")()

// let numero = parseInt(prompt("Digite o numero"))

// if(numero%2 == 0){
//     console.log("par")
// } else{
//     console.log("impar")
// }



// Exercicio 5

// let prompt= require("prompt-sync")()

// let numeroUm = parseFloat(prompt("Digite o primeiro"))
// let numeroDois = parseFloat(prompt("Digite o primeiro"))

// if (numeroUm > numeroDois){
//     console.log(numeroUm)
// } else {
//     console.log(numeroDois)
// }



// Exercicio 6

// let prompt = require("prompt-sync")()

// let notaUm = parseFloat(prompt("Digite a primeira nota: "))
// let notaDois = parseFloat(prompt("Digite a primeira nota: "))
// let notaTres = parseFloat(prompt("Digite a primeira nota: "))
// let notaQuatro = parseFloat(prompt("Digite a primeira nota: "))

// let media = ((notaUm + notaDois + notaTres + notaQuatro) / 4)

// if (media> 7.0)
if (media >= 7.0){
    console.log("Aprovado")
} else if(media < 7.0 && media >= 5.0){
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}
