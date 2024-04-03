export function Exercicio5(){
    console.log("Função Exercicio 5")

    let anterior: number = 0;
    let atual: number = 1;
    let fibo: number 

for (let contador: number = 0; contador <= 4; contador ++){
    
    fibo = anterior + atual;
    anterior = atual;
    atual = fibo
    console.log(fibo)

}
}