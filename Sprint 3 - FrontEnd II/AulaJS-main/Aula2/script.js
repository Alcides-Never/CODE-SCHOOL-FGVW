
let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um numero"))

if (numero >= 10 && numero <=20){
    console.log("O numero informado está no intervalo desejado, entre 10 e 20")
} else{
    console.log("O numero está fora do intervalor desejado..")
}



// let prompt = require("prompt-sync")();

// let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

// switch (animal){
//     case 'cachorro':
//         console.log ("au")
//         break;
//     case 'gato':
//         console.log("miau")
//         break;
//     case 'vaca':
//         console.log("mu")
//         break;
//     case 'papagaio':
//         console.log("Você foi a culpa desse amor acabar...")
//         break;

//     default:
//         console.log("Conheço não")
//         break;
// }