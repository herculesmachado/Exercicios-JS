// O jeito certo de fazer uma factory, podendo fazer manipulação de dados do produto ou incrementação de um novo elemento
function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 199.90))
console.log(criarProduto('Celular', 99.40))


// Apenas um exemplo de como seria caso não fizesse a factory, desta forma ficaria mais complicado pois teria que ter mais de um objeto, então usa-se o factory para facilitar o código
const cadastro = {
    nome: 'hercules',
    sobremome: 'Machado',
    idade: 19
}
console.log(cadastro)
