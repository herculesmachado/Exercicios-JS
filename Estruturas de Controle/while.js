function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min //O MAth.random gera um valor qualquer entre 0 e 1
    return Math.floor(valor)
}

let opcao = 0

//O que esta estrutura quer dizer... Que se enquanto a operação for True(verdadeira) continue no laço, assim que for False(negativa) saia dela
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 3)
    console.log(`A melhor opção foi ${opcao}.` )
}
//Normalmente o laço tem que encontrar algo para que ele saia, caso contrario ele vai ficar rodando o laço finitamente

console.log('Fim')