export function Exercicio5(){
    console.log("Função Exercicio 5")

    let anterior = 0;
    let atual = 1;
    let fibo 

for (let contador = 0; contador <= 4; contador ++){
    
    fibo = anterior + atual;
    anterior = atual;
    atual = fibo
    console.log(fibo)

}
}