Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

let nome = 'Rodrigo'

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
        console.log('Parabéns', `${nome}`, 'você é um génio')
    } else if (nota.entre(7, 8.9)) {
        console.log('Aprovado')
        console.log('Parabéns',  `${nome}`)
    } else if (nota.entre(4, 6.9)) {
        console.log('Recuperação')
        console.log('Por pouco',  `${nome}`, ',mas tente mais uma vez')
    } else if (nota.entre(0, 3.9)) {
        console.log('Reprovado')
        console.log('Tente proximo ano',  `${nome}`)
    } else {
        console.log('Nota invalida desse aluno')
    }
}

imprimirResultado(9.4)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)

imprimirResultado(6.9)