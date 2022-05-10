// É um tipo de função anónima já que não é passado nenhum nome
const soma = function (x, y) {
    return x + y
}

// Função anónima é uma função que nao tem nome

// O terceiro parâmetro (operacao = soma) que por padrão ele nao vai passar nada, ele vai assumir a função da linha 1
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

// Como nao passei o terceiro parâmetro nessa chamada, ele vai assumir a função default
imprimirResultado(4 , 3)

// Nao vai fazer causa nenhuma é apenas para indicar
imprimirResultado( 3, 4, soma)

// Acabei de passar uma função anónima em uma outra função anónima, e esse tipo de recurso é mais comum que voce imagine, ou seja, é coisa que se usa MUIITTOO na linguagem, então é bom se sentir bem com isso
imprimirResultado(2, 4, function (x, y) {
    return x - y
})


// Quando tenho uma Arrow Function, eu tenho de fato uma função anónima
imprimirResultado( 4, 5, (x, y) => x * y)

// Outro exemplo de função anónima é dentro de um obj
const pessoa = {
    falar: function () {
        console.log('Falar')
    }
}

pessoa.falar()