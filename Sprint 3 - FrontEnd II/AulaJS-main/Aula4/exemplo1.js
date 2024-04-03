

// let professores = ["Alana", "Alexia", "Jessica", "Odirlei", "Possarler", "Thiago", "Samanta"]

// for (let indice = 0; indice < professores.length; indice ++){
//     console.log("o indice atual: " + indice)
    // professores[indice] -> padrao usado para acessar o conteúdo dentro do índice
//     console.log("A pessoa é: " + professores[indice])  
// }


// Laço Condicional

// let prompt = require("prompt-sync")()

// let resposta = prompt("Você deseja ler um Boa noite?")

// while (resposta == "sim"){
//     console.log("Boa noite")

//     resposta = prompt("Você deseja continuar recebendo Boa noite?")
// }

// if (resposta == "nao"){
//     console.log("Então nao me procure mais!")
// }



//Laço contato - utiliza um contador, é usado para repetir um número exato

// for(let contador = 0; contador < 3; contador = contador + 1){
//     console.log("Boa noite")
// }


//exemplo do - while
// let prompt = require("prompt-sync")()

// let resposta = prompt("Você deseja ler uma boa noite?")

// do{
//     console.log("tô nem ai, boa noite")

//     resposta = prompt("Você deseja continuar recebendo boa noite?")
// } while ( resposta == "sim");


// exemplo array

let listaDeNumeros = [1, 2 , 5 , 7, 16]

//Exemolo de lista de numeros geral
// console.log(listaDeNumeros) 

// forma correta

console.log(listaDeNumeros[4])

for (let index = 0; index < listaDeNumeros.length; index ++){
    console.log(`O item de indice ${index} é ${listaDeNumeros[index]}`)
}