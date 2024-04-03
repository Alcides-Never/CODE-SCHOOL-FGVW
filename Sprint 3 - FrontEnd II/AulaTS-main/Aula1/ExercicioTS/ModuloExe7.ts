export function Exercicio7(){
    // 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.
    
    let contador: number = 0
    let atual: number = 0
    let resultado: number
    
    while (contador < 100){
        contador++
        resultado = contador + atual 
        atual = resultado
        console.log(resultado)
    }
}

