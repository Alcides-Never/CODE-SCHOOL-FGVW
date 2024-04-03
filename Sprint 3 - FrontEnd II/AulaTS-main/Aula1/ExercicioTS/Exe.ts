import promptSync from "prompt-sync"

let prompt = promptSync()

import { Exercicio1 } from "./ModuloExe1";
import { Exercicio2 } from "./ModuloExe2";
import { Exercicio3 } from "./ModuloExe3";
import { Exercicio4 } from "./ModuloExe4";
import { Exercicio5 } from "./ModuloExe5";
import { Exercicio6 } from "./ModuloExe6";
import { Exercicio7 } from "./ModuloExe7";
import { Exercicio8 } from "./ModuloExe8";
import { Exercicio9 } from "./ModuloExe9";
import { Exercicio10 } from "./ModuloExe10";

let resposta: string;

do{
    console.log("Bem vindo ao menu de exercício")

    resposta = prompt("Digite um numero de 1 à 10, para escolher um exercício ou 'sair' para interromper o programa: ")

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
            break;
        case "7":
            console.log("Você escolheu o exercício 7")
            Exercicio7()
            break;
        case "8":
            console.log("Você escolheu o exercício 8")
            Exercicio8()
            break;
        case "9":
            console.log("Você escolheu o exercício 9")
            Exercicio9()
            break; 
        case "10":
            console.log("Você escolheu o exercício 10")
            Exercicio10()
            break; 

        case "sair":
            console.log("")
            break;

            default:
            console.log("Opção Errada!")
            break;
    }

} while (resposta != "sair");