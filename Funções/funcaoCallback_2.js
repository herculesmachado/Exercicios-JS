//Essa forma de fazer é muito mais trabalhoso
const notas = [1.2,  2.4, 7.6, 8.6,  4.7, 7.,8]

//Sem callback
const notasBaixar1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixar1.push(notas[i])
    }
}
console.log(notasBaixar1)

//Com callback

//Pode-se fazer desse jeito
const notasBaixar2 = notas.filter(function(notas){
    return notas < 7
})
console.log(notasBaixar2)

//Mas também tem um jeito mais rápido e fácil de fazer utilizando poucas linhas
//Dessa for voce vai ter uma constante (notasMenorQue7) para poder usar em outras partes do código
const notasMenorQue7 = notas => notas < 7
const notasBaixar3 = notas.filter(notasMenorQue7)
console.log(notasBaixar3)


//Aqui eu to chamando da mesma forma so que as notas maiores
const notasMaiorQue7 = notas => notas > 7
const notasMaiores = notas.filter(notasMaiorQue7)
console.log(notasMaiores)
