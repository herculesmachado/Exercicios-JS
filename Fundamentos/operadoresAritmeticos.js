const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2 //Se "a" for numero PAR vai ser divisível por 1 e se o "a" por ÍMPAR vai ser divisível por 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)


// d++ -> Operador postfix (que vem depois do operador)
// ++d -> Operador Prefix (que vem antes do operador)
// op1 + op2 -> Operador infix (que fica entre os operadores)
// -a -> Operadores unário (aplica-se apenas a um operador, nesse caso deixa ele negativo)