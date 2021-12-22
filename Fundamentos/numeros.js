const peso1 = 1.0
const peso2 = Number('2.0') //Posso passar um numero para um string nessa forma e continua sendo um number

console.log(typeof peso1, peso2)
console.log(Number.isInteger(peso1)) //Mostra se o valor é Inteiro ou nao
console.log(Number.isInteger(peso2))

//Função aritmética
const avaliacao1 = 2.2344
const avaliacao2 = 4.2344

const total = avaliacao1 * peso2 + avaliacao2 / peso1
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Determina quantas casa decimais vai esta 
console.log(media.toString(2)) //Caso eu queira passar esta string para um valor binário basta por o numero (2)

console.log(typeof media) //number com o "n" minúsculo é um tipo
console.log(typeof Number) //Number com o "N" maiúsculo é uma função


