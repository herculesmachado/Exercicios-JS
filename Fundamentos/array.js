const valores = [7.7, 8.9, 6.2, 9.3] //Para elaborar uma array coloca colchetes
console.log(valores[0], valores[3]) //Apenas será mostrado o valor pedido no caso desse exemplo será mostrado o valor 0 e 3

console.log(valores[5]) //Caso eu queira acessar um valor que não esteja, independente do valor ele me volta undefined

valores[4] = 10 //Adicionei mais um valor na variável
console.log(valores)

console.log(valores.length) //Mostra a quantidade de elementos a dentro de uma array

valores.push({id /*Identificador*/ : 3}, null, false, 'Texto') //Adiciona coisas na array
console.log(valores)

//OBS: para a saúde do código e de quem esta lendo, é interessante fazer uma array para cada tipo de coisas, pois nao é legal misturar String, com números, com booleano, pois fica difícil e feio o código

console.log(valores.pop()) //retira o ultimo objeto da array

delete valores[0] //Delete um objeto da array
console.log(valores)

console.log(typeof valores) //Mostra o tipo da array

