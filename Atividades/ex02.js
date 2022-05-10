const avaliacoes = function (nota) {
    switch(Math.ceil(nota)) {
        case 10: case 9: case 8:
            console.log('Honrado')
            break

        case 7: case 6: case 5: 
            console.log('É nós')
            break

        default: 
        console.log('Tente outra vez amigaaaooo')
    }
}

avaliacoes(9)
avaliacoes(5)
avaliacoes(4.3)