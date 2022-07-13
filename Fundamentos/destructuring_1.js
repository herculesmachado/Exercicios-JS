// novo recurso do ES2015

//É uma operador de destruturação...

const pessoa = {
    nome: 'Ana',
    idade: 24,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 200,
    }
}

const {nome, idade} = pessoa // to falando, tire de dentro do objeto (const) os atributo (nome, idade) da const 'Pessoa'
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHunorada = true} = pessoa
console.log(sobrenome, bemHunorada)

const { endereco: {logradouro, numero, cep = '(O cep nao possui)'}} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa
console.log(ag, num) // Neste caso aqui, ele da erro pois nao existe o atributo 'conta'
