const notas = [0.1, 3.4, 43.6, 43.1, 3.3]

//Estrutura usada com IN (ele nao vai te dá nota em si, ele vai te dá o índice de uma array)
for   ( let i in notas) {
    console.log(i, notas[i])
}

//Estrutura usada com OBJETO
const pessoa = {
    nome: 'Hercules',
    sobrenome: 'Machado',
    idade: 18,
    peso: 60,   
}
for ( let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

