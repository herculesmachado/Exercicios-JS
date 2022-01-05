console.log(Math.floor(6.1))

const obj1 = {}
obj1.nome = 'bola' //Nesse exemplo posso criar uma constante e incrementar, ou seja, criar um atributo ponto
 console.log(obj1.nome)

 function Obj(nome) {
     this.nome = nome // significa; o nome associado ao objeto que foi criado a partir dessa função
     this.exec = function() {
         console.log('Exec...')
     } 
 }

const obj2 = new Obj('cadeira') //depois do new coloca-se o ''Obj'' com a primeira letra maiúscula
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()