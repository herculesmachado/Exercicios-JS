const pessoa = {
    nome: 'Hercules',
    idade: 19,
    peso: 60
}

console.log(Object.keys(pessoa)) // Ele vai pegar todas as chaves do obj
console.log(Object.values(pessoa)) // Ele vai pegar todos os valores do obj
console.log(Object.entries(pessoa)) // Ele vau nos dá todas as chaves com os seus valores em forma de Array

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) 

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Este atributo avisa que pode ser enumerada ao ser chamada pelo atributo (keys)
    writable: false, //Esta atributo avisa se pode ou nao ser rescrita, neste caso, não pode então prevalence o valor de 2005
    value: '01/01/2005'
}) // Aqui eu posso definir uma propriedade
pessoa.dataNascimento = '01/05/2007'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 3}
const o2 = { c: 5, a: 9} 
const obj = Object.assign(dest, o1, o2) //Neste caso o valor 'a' será sobre escrito e valerá o ultimo valor, ou seja, 9
console.log(obj)

Object.freeze(obj) // Congelo o valor e fica imutável
obj.c = 234
console.log(obj)