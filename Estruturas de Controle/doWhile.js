//Estrutura muito pouco usada pela maioria dos programadores

function getImprimirResultado (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor (valor)
}

let opcao = 0

do {
    opcao = getImprimirResultado (-1, 10)
    console.log(`Melhor opção é ${opcao}.`)
} while (opcao != -1)

//Coloca a estrutura "While" no fim da estrutura, e no lugar coloca "Do"

console.log('Fim')