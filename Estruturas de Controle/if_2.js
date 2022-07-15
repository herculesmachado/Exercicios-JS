 function test1 (num) {
    if (num > 7) 
        console.log(num)
        console.log('Final')    
 }

 //Use sempre com chaves, recomendado
 test1(1)
 test1(9)

 function test2 (num) {
    if (num > 7); { // cuidado com o ";", não usar com as estruturas de controle
        console.log(num)
    }
 }

 test2(6)
 test2(8)