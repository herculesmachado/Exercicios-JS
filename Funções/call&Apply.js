// A diferença entre o Call e o Apply é justamente forma em que for passar os paramentos de uma função.

function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`
}

const produto = {
    nome: 'notebook',
    valor: 3000,
    desc: 0.15,
    getPreco
}

global.preco = 2000
global.desc = 0.2
console.log(getPreco()) //Chamei está função diretamente
console.log(produto.getPreco()) //retorna NaN (não sei pq!!)

const carro = {preco: 40000, desc: 0.6}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


// Quando é chamada a função tipo call, eu to chamando diretamente nos parâmetros de cada uma que serão passados para a função
// Sempre o primeiro é o contexto e depois os parâmetros que ele vai passar para a função (getPreco)
console.log(getPreco.call(carro, 0.17, '$'))


// Na função Apply no lugar de todos os parâmetros tem que colocar uma Array
console.log(getPreco.apply(global, [0.20, '$']))

//OBS: É a forma de como é chamado que diferencia eles dois
