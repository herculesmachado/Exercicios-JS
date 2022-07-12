//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

/*
Minha resolução, acertei em partes pois este modo de fazer é antigo

let base = 12
const expoente = Math.pow(base, 3)
console.log(expoente)
*/

//Resolução correto e de modo atual

function expoente(base, expoente){
    resultado = base ** expoente // Posso deixar assim ou fazer um let

    return resultado
}

console.log(expoente(2,3))

//Exercício  corrigido e acertado por metade


