// Como fazia antes do ECMAScript

// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    // Este parâmetro é extremamente usado ainda hoje em questões de cadastro
    a = a || 1 
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0)) // O zero vai receber o valor 1 sempre

// Estratégia  2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // Caso o "a" nao seja informado, ele vai assumir o valor 1
    b = 1 in arguments ? b : 1  // Aqui neste caso eu to falando (tem algum numero em B, se nao tiver assuma o valor 1)
    c = isNaN(c) ? 1 : c // Se ela nao for um numero retorna um NaN, caso contrario ele pega o valor padrão passado pra c (é a estrutura mais segura)
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c // Ficou mais fácil e mais simples e adequada para ser usada
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

// Os valores padrão serve para voce colocar parâmetros de função, caso crie uma função e queria por um valor padrão, ai é mais recomenda usar a 1° forma mostrada neste no começo