let valor //Nao ha valor 
console.log(valor)

valor = null //Ausência de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco) //Vai mostrar UNDEFINED pois não atribuir valor a variável (preço)

console.log(produto) //Valor será chaves

produto.preco = 3.54 //Como é um object posso atribuir valor fora da sua inicialização
console.log(produto.preco)

produto.preco = undefined //Evitar atribuir undefined
// delete produto.preco // Se eu quiser excluir algo, usar dessa forma
console.log(!!produto.preco) //valor booleano
console.log(produto)

produto.preco = null //Sem preço 
console.log(!!produto.preco)
console.log(produto)