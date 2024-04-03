
// 10. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

import PromptSync from "prompt-sync"
var prompt = PromptSync()

export function Exercicio10(){
    let numero: number = parseInt(prompt("Informe o número: "))
    
    
    while(numero != 0){
        numero = parseInt(prompt("Informe o número: "))        
    }
}
