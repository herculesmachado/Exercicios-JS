{ 
    { 
        { 
            var a = 123 
            console.log(a) // A variável esta sendo visível dentro desse bloco
        } 
    } 
}
console.log(a) // Porem a mesma variável VAR pode esta fora de visibilidade e mesmo assim acessar, pois ela é uma variável Var Global

//No entendo a variável Var so tem dois sistemas um é (Variável Var global) e o outro é (variável var scoop de function)

function test() {
    var b = 456
    console.log(b)
}
test()
// {console.log(b)} quando se declara uma variável dentro de uma Function, ela já não é mais global 

//Sempre preferir usar var dentro de uma function pois ela fica impedida de ser modificada globalmente por um valor na mesma variável podendo zoar todo o código
