const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

//Posso armazenar a função é uma variavel
const falar = pessoa.falar
falar()     //Aqui temos um conflito entre o mundo da programação funcional com o orientado ao objeto

// O bind é voce passa um objeto no qual voce quer que seja resolvido o this
// É o responsável de amarra um determinado objeto para ele ser o dono daquele método quando for chamado 
const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()