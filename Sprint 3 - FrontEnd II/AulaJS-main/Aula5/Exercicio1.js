// 1. Imprimir números de 1 a 10 utilizando o loop for

// for (let contador = 1; contador <=10; contador++){
//     console.log(contador)
// }

//2. Imprimir números pares de 1 a 10.

// for (let contador = 0; contador <=10; contador += 2 ){
//     console.log(contador)
// }


//3. Faça um programa que imprima os números ímpares de 0 a 50;

// for (let contador = 1; contador <= 100; contador += 2){
//     console.log(contador)
// }


// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

// let prompt = require("prompt-sync")()

// let numero = prompt("Digite um numero de 1 a 10: ")

// for (let contador = 1; contador <= 10; contador++ ){
//     let resultado = contador * numero;
//     console.log(`${numero} x ${contador} = ${resultado}`)
// }

//5. Imprimir os primeiros 10 números da sequência de Fibonacci.


let anterior = 0;
let atual = 1;
let fibo 

for (let contador = 0; contador <= 4; contador ++){
    
    let fibo = anterior + atual;
    anterior = atual;
    atual = fibo
    console.log(fibo)

}




// 0 1 1 2 3 5 8 