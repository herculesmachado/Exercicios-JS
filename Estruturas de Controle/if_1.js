function soNotaBoa(nota) {
    if (nota >= 7) {
        console.log('Aprovado com', + nota, 'de nota')
    } 
}

soNotaBoa(9)
soNotaBoa(7)

function seForVerdadeFale (valor) {
    if (valor) {
        console.log('Isso é vdd', + valor)
    }
}

seForVerdadeFale()
seForVerdadeFale(null)
seForVerdadeFale(undefined)
seForVerdadeFale(NaN)
seForVerdadeFale(0)
seForVerdadeFale('')
seForVerdadeFale(-1)
seForVerdadeFale(' ')
seForVerdadeFale('?')
seForVerdadeFale([])
seForVerdadeFale([1, 2])
seForVerdadeFale({})
