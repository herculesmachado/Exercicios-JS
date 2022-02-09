const imprimirResultado = function (nota) {
    switch (Math.ceil(nota)) {
        case 10:
        case 9:
            console.log('Honra')
            break
        case 8:  case 7: 
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break 
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Tente outra vez')
    }
}

imprimirResultado(10)
imprimirResultado(4.77)
imprimirResultado(-1)
imprimirResultado(11)