//Fazer um menu de exercicio utilizando exemplos dados em aula
// 6 exercicios dentro de funções, e incluir nome ou algo de sua preferencia

import promptSync from "prompt-sync"

let prompt = promptSync()

import { Exercicio1 } from "./moduloExercicio1.js";
import { Exercicio2 } from "./moduloExercicio2.js";
import { Exercicio3 } from "./moduloExercicio3.js";
import { Exercicio4 } from "./moduloExercicio4.js";
import { Exercicio5 } from "./moduloExercicio5.js";
import { Exercicio6 } from "./moduloExercicio6.js";

let resposta;

do{
    console.log("Bem vindo ao menu de exercício")

    resposta = prompt("Digite um numero de 1 à 6, para escolher um exercício ou 'sair' para interromper o programa: ")

    switch (resposta) {
        case "1":
            console.log("Você escolheu o exercício 1")
            Exercicio1()
            break;
        case "2": 
            console.log("Você escolheu o exercício 2")
            Exercicio2()
            break;
        case "3":
            console.log("Você escolheu o exercício 3")
            Exercicio3()
            break;
        case "4":
            console.log("Você escolheu o exercício 4")
            Exercicio4()
            break;
        case "5": 
            console.log("Você escolheu o exercício 5")
            Exercicio5()
            break;
        case "6":
            console.log("Você escolheu o exercício 6")
            Exercicio6()

            default:
            console.log("Opção Errada!")
            break;
    }

} while (resposta != "sair");