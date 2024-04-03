// 9. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.

import PromptSync from "prompt-sync"
let prompt = PromptSync()

export function Exercicio9(){
    let numero = parseInt(prompt("Informe o nmumero: "))
    
    while(numero >= 0){
        let contador = numero
        numero --
        console.log(contador)
    }
}

