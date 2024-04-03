import promptSync from "prompt-sync"
let prompt = promptSync()

export function Exercicio4(){
    console.log("Função exercicio 4")
    console.log("Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.")
    	
    let numero: number = parseInt(prompt("Digite um numero de 1 a 10: "))

    for (let contador:number = 1; contador <= 10; contador++ ){
    let resultado: number = contador * numero;
    console.log(`${numero} x ${contador} = ${resultado}`)
    }
}
