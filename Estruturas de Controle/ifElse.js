function situacao (nota) {
    if (nota >= 7)  {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}


situacao(8)
situacao(6.9)
situacao('Epa!') // cuidado não pode ocorrer isso!!