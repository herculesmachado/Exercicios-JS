//Função sem retorno

function imprimirNota(a, b) {
    console.log(a + b)
}
imprimirNota(2, 4) //Irá fazer a soma corretamente
imprimirNota(2) //Me retorna um Nan
imprimirNota(2, 4, 5, 6, 8) //Apenas irá tratar os dois primeiros valore e os demais irá ignorar
imprimirNota() //Me retorna um Nan 

//Função com retorno

function soma (a, b = 3 /* Eu apenas tratei a função B colocando ele como padrão 3 */ ){
    return a + b
}

console.log(soma(2, 5)) //Irá me retornar a soma correta
console.log(soma(2)) //Apenas tratei o valor A, pois o valor B ja esta tratado sendo como valor padrão 3
console.log(soma()) //Vai me retornar um Nan pois eu n tratei a função A
