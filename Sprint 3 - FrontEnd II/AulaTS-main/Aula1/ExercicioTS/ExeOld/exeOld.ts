import PromptSync from "prompt-sync";

let prompt = PromptSync()

let resposta: string;

do{
    console.log("teste")

    resposta = prompt("teste interno")
}
while(resposta =! "sair");
