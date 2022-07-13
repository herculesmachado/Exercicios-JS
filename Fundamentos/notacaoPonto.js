console.log(Math.floor(6.1))

const obj1 = {}
obj1.nome = 'bola' //Nesse exemplo posso criar uma constante e incrementar, ou seja, criar um atributo ponto
//obj1['nome'] = 'bola2'
 console.log(obj1.nome)

 function Obj(nome) { //Função
     this.nome = nome // significa; o nome associado ao objeto que foi criado a partir dessa função
     this.exec = function() {
         console.log('Exec...')
     } 
 }

const obj2 = new Obj('cadeira') //depois do new coloca-se o ''Obj'' com a primeira letra maiúscula
const obj3 = new Obj('Mesa') // quando se coloca new em uma função, e se tornar uma object
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

//Caso eu queira transformar alguma função para object, basta na chamada (EX: const obj3 = new obj('Mesa')) colocar o new antes da função
