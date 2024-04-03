// let prompt = require("prompt-sync")()

// Exemplo de Objeto
// let nome_recebido = prompt("Digite o nome: ")
// let idade_recebida = prompt("Digite sua idade: ")

// let pessoa = {
//     nome: nome_recebido,
//     idade: idade_recebida
// }

// console.log("Olá " + pessoa.nome + "! Você está com " + pessoa.idade + " anos")




// Exemplo de função

// let nome_recebido = prompt("Digite o nome: ")
// let idade_recebida = prompt("Digite sua idade: ")

import { exercicio1 } from "./moduloExercicio1.js"

import PromptSync from "prompt-sync"

let prompt = PromptSync();

prompt("teste?: ")

exercicio1()

function olaPessoa(nome_, idade_) {

    let pessoa = {
        nome: nome_,
        idade: idade_
    }
    console.log("Olá " + pessoa.nome + "! Você está com " + pessoa.idade + " anos")
}

// olaPessoa(nome_recebido, idade_recebida)



// digite o numero do exercicio que voce queexibir, se quiser saur digite sair
// de {
    resposta = prompt("resposta")

    switch (resposta) {
        case 1:
            exercicio1()
            break;
        
            etc..
        default:
            break;
    }
}