//Function declaration 

// Posso chamar está função antes mesmo de criar ela, é uma das mais usadas 
console.log(soma(2, 5))

function soma(a, b) {
    return a + b
}

//Function Expression

//Está função não posso chamar ela, antes de ser criada, primeiro eu crio e só depois eu á chamo, é uma das mais usadas e a estrutura dela atribui ela a uma variavel e a função anónima
const sub = function(a, b){
    return a - b
}
console.log(sub(3, 9))

//named function expression

//Não é muito comum de se ver nas aplicações, a sua estrutura é voltada para uma variavel nomeada e uma função também nomeada que pode ser usada o mesmo nome para ambos, esta forma de estrutura apenas lhe da vantagem na hora de debuggar o código já que o nome da função irá aparecer, e só posso chamar ela depois de criar, mas via de regra é a menos usada
const mult = function mult(a, b) {
    return a * b
}
console.log(mult(2, 8))