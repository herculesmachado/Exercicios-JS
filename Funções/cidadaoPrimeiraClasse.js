//  Função em JS é First-Class Object (Citizens) é quando a linguagem trata a função como um dado
// Higher-order function (Função de alta ordem) JS funcional

// Criar uma forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function() { }

// Armazenar em uma array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0] (2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'opa'}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}
run(function() {console.log('Executando...')})

// Um função pode retornar / conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

//Formas de como chamar esta função acima
soma(2, 4)(9)

const cincoMais = soma(7, 4)
cincoMais(3)



