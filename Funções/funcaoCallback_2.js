//Essa forma de fazer é muito mais trabalhoso
const notas = [1.2,  2.4, 7.6, 8.6,  4.7, 7.8, 3.0, 10]

//Sem callback
const notasBaixar1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixar1.push(notas[i])
    }
}
console.log(notasBaixar1)

//Com callback

//Pode-se fazer desse jeito, o elemento filter não altera o bloco (notas) porém será filtrada apenas as coisas que queremos
const notasBaixar2 = notas.filter(function(notas){
    return notas < 7
})
console.log(notasBaixar2)

//Mas também tem um jeito mais rápido e fácil de fazer utilizando poucas linhas
//Dessa for voce vai ter uma constante (notasMenorQue7) para poder usar em outras partes do código
const notasMenorQue7 = notas => notas < 7
const notasBaixar3 = notas.filter(notasMenorQue7)
console.log(notasBaixar3)

//Esse jeito tem menos linhas, porém quando for outra vez (notas => notas > 7) irá ter que reescrever ao invés de apenas chamar a variavel, mas fica a critério 
const notasMaiores = notas.filter(notas => notas > 7)
console.log(notasMaiores)
 