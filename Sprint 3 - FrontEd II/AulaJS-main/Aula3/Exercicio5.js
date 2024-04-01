let prompt = require("prompt-sync")()

let valorCompra = parseFloat(prompt("Informe o valor da compra: "))

if (valorCompra <= 100){
    console.log(`Total da compra RS${valorCompra.toFixed(2)}, não recebrá desconto.`)
} else if(valorCompra>100 && valorCompra<=200){
    let calculo = (-((10*valorCompra)/100)) + valorCompra;
    console.log(`Total da compra com o desconto R$${calculo.toFixed(2)}`)
} else{
    let calculo = (-((20*valorCompra)/100)) + valorCompra;
    console.log(`Total da compra com o desconto R$${calculo.toFixed(2)}`)
}