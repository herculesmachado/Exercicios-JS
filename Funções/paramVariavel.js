function soma() {
    let soma = 0

    // Dessa forma (for / in) eu consigo fazer arguments - colchetes e acessando o índice de cada um dos elementos que foram passados a esta função
    // Quando nenhum parâmetro é passado essa array é vazio
    // E tenho a possibilidade de pegar todos os parâmetros de uma função e somar
    for (i in arguments) {
        soma += arguments[i] //Arguments é uma array interna de uma função que tem todas as informações que foram passadas
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, 'teste'))
console.log(soma('a', 'b', 'c', 'd'))