//Tipos de String Importantes:

const a = "Twi3ch" //Colocar em aspas Duplas ou simples

console.log(a.charAt(3)) //Apenas mostra o local da letra na palavra ou fase
console.log(a.charAt(6)) //Nesse caso ele volta um valor vazio pois nao encontrou nada nesta posição
console.log(a.charCodeAt(3)) //Mostra a posição da leta na tabela da Unicode
console.log(a.indexOf('3'))

console.log(a.substring(1)) // Ele esconde a letra de numero 1 e mostra as demais
console.log(a.substring(0, 5)) //Ele mostra da letra 0 ate a letra 5 e exclui a letra que está na posição 6

console.log('Statess '.concat(a).concat("!")) //Junta todas strings 
console.log('Statess ' + a + ' !') // Faz a mesma função do .concat 

console.log(a.replace(3, 't')) //Na palavra se tiver algum numero e voce quiser mudar pra uma letra, basta fazer esse ex: de replace

console.log('Maria,Pedro,João'.split(',')) //Da um espaçamento entre os nomes gerando uma array com os elementos que á nele
