console.log(typeof Object) //Isso se trata de uma função
console.log(typeof new Object()) //Quando é posto o 'New' instanciando uma função, então dai vou ter um objeto criado a partir de uma função

//Posso fazer a mesma coisa com uma função que eu mesmo criei como é o caso desse exemplo
const Cliente = function (){}
console.log(typeof Cliente)
console.log(typeof new Cliente())

//Posso fazer a mesma coisa com uma classe que vai funcionar do mesmo jeito 
class produto {} //ES 2015 (ES6)
console.log(typeof produto)
console.log(typeof new produto())