//Diferença entre VAR, LET e CONST

var a = 3
let b = 4

var a = 30
//let b = 40 (LET nao pode redeclarar outro valor na variável)
b = 40

console.log(a, b)

var a = 300
b = 400 //Variáveis começadas com (VAR) pode ser redeclarar sem nenhum problema

console.log(a, b)

const c = 5
//c = 5 (CONST nao pode ser mudado, pois ele é constante, e so pode ser mudado em caso especifico e comprovados) 
console.log(c)