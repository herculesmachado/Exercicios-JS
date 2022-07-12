/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


/*
Minha resolução

function imprimirTriangulo(lado1, lado2, lado3){

    if(lado1 == lado2 == lado3){
        console.log('Este triângulo é equilátero')
    } else if (lado1 && lado2 != lado3) {
        console.log('Este triângulo é isósceles')
    } else if (lado1 != lado2 != lado3) {
        console.log('Este triângulo é um escaleno')
    } else {
        console.log('Não identificado')
    }
}

imprimirTriangulo(1, 1, 1)
imprimirTriangulo(1, 1, 3)
imprimirTriangulo(2, 1, 3) 
*/


//Resolução correta

function classificarTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 == lado3){
        return 'Equilátero'
    } else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificarTriangulo(1,1,1))
console.log(classificarTriangulo(1,2,2))
console.log(classificarTriangulo(1,2,3))

//Exercício corrigido
