 console.log('a =', a) //Essa declaração o retorno dela será 'undefined' pois o valor nao foi encontrado
 var a = 2
 console.log('a =', a) //Ao contrario desse, pois o valor foi encontrado e o seu retorno foi o valor = 2

 // aqui ocorre um Hoisting pois o Var ele passa pra cima, coisa que o próprio interpretador da linguagem ja faz

 console.log ('a =', b) //Aqui ja acontece o contrario, pois o let interpreta como 'Error' já que o valor nao foi encontrado na primeira chamada no console
 let b = 2
 console.log(b)

 //OBS: o Hoisting ou linçamento só é feito com var