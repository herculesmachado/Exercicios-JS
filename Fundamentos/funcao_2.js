//Armazenando uma function na variavel

const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Funcao Arrow => que é reduzida

const soma = (a, b) => { 
    return a + b
}
console.log(soma(2, 4))

//Função ainda mais reduzida para apenas uma linha

const subtracao = (a, b)/*Parâmetro*/ =>/*Function*/ a - b/*Return*/
console.log(subtracao(2, 6))

//OBS: ainda tem uma mais reduzida
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')