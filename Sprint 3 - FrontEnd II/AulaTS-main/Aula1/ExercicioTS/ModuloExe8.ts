// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

import promptSync from "prompt-sync"
let prompt = promptSync()

export function Exercicio8(){

    let idade: number = parseInt(prompt("Informe a idade: "))
    
    while (idade < 18){ 
        idade = parseInt(prompt("Informe a idade: "))
    }
    
    console.log("Maior de idade")
}
