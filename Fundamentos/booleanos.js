 let Bool = false
console.log(Bool) //Determinei que o valor é falso

bool = true
console.log(bool) //Determinei que o valor é True

bool = 10
console.log(!!bool) //Pondo duas exclamações quer dizer que foi trocado para True e apenas um exclamação é negativo

console.log('Tipos de operações que se comporta como true') //Apenas funciona com duas (2) exclamações
console.log(!!3) //Numero
console.log(!!-1) //Numero negativo é true
console.log(!!' ') //String vazia (com espaço)
console.log(!!{}) //Object
console.log(!![]) //Array vazia
console.log(!!Infinity) //Valor infinito
console.log(!!(bool = true)) //Valor true
console.log(!!'Text') //String

console.log('Tipos de operações que se comporta como false')
console.log(!!0) //valor zero sempre será false
console.log(!!'') //string vazia (sem espaço)
console.log(!!null) //valor null
console.log(!!NaN) //Valor nao existente
console.log(!!(bool = false)) //false
console.log(!!undefined) //Nao identificado

console.log('para finalizar... Uma operação com || (ou)')
console.log(!!('' || 0 || 'Opa' || null)) //O retorno de valor sempre sera o primeiro verdadeiro (true) que a operação encontrar

console.log('Uma pequena lógica do JS')
let nome = ''
console.log(nome || 'Desconhecido') //com || (ou) vai de acordo com a tabela, e dependendo do caso pode fazer o inverso
