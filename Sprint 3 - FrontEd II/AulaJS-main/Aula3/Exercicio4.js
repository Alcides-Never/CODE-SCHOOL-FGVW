let promtp = require("prompt-sync")()

let anoNascimento = parseInt(promtp("Digite o ano do seu nascimento seguinto os 4 numeros do ano: "))

let calculo = 2023 - anoNascimento

if(calculo > 18){
    console.log(` Sua idade é ${calculo}, portanto idade ok`)
} else{
    console.log("Erro")
} 