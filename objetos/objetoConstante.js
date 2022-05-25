// pessoa -> 123 -> {...}
const pessoa = {nome: 'Ana'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
// pessoa = {nome: 'Julia'} (neste caso aqui ele vai gerar uma erro, pois to tentando mudar o seu endereço, o que não é possível quando se declara uma constante)

Object.freeze(pessoa) //Neste momento to fazendo com que ao meu objeto (pessoa) não possa mais modificar em nada literalmente, nem o sua variavel, nem endereço e muito menos o conteúdo que á dentro dele

pessoa.nome = 'João' //Tentando mudar o nome, porem sem êxito
pessoa.end = 'Rua ABC' //Tentando adicionar um novo elemento dentro de (pessoa), porem sem êxito
delete pessoa.nome //Tentando deletar o elemento (nome), porem sem êxito

//Depois que o atributo (freeze) é colocado, nada pode ser adicionada, removido ou modificado

//Outra forma de declarar um objeto ja com o  (freeze) embutido é fazendo:
// Desta forma é bem interessante, e deixa o seu código mais limpo e menor
const pessoaConstante = Object.freeze({nome: 'Hercules'})
console.log(pessoaConstante)