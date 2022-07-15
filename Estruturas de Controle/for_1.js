//Estrutura usada com While
let contador2 = 0 //Declaração de variavel
while (contador2 <= 10 /*Expressão*/) {
    console.log(`Contador2 = ${contador2}`) 
    contador2++ //incremento
}


//Estrutura FOR
for ( let contador = 0 /*Declaração*/; contador <= 10 /*Expressão*/; contador++ /*Incremento*/) {
    console.log(`Contador = ${contador}` )
}
//É uma estrutura mais enxuta, mais simples de se fazer um contador (exemplo)

//Estrutura usada com ARRAY
const notas = [0.1, 3.4, 43.6, 43.1, 3.3] 
for(i = 0; i < notas.length /*Length é o tamanho da array */; i++ /*Acrescente mais um ao elemento da array*/) {
    console.log(`I = ${[i]}`)
}
 
