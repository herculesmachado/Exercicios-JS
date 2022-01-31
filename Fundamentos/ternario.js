//1° forma de se fazer sem corpo
const resultado = nota => nota >= 7 ? 'Aprovado' : 'reprovado'

console.log(resultado(6))


//2° forma de se fazer com corpo
const resultado2 = nota1 => {
    return nota1 >= 5 ? 'Apr' : 'Rep'
}

console.log(resultado2(2.0))