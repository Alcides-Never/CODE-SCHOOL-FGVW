let prompt = require("prompt-sync")()

let nome = prompt("Digite o nome: ")
let senha = prompt("Digite a senha: ")

if(nome == "admin" && senha == "senha123"){
    console.log("Login bem sucedido")
} else {
    console.log("Dados de login errados")
}