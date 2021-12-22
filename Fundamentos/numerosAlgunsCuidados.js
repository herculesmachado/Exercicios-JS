console.log(4 / 0) //Gera um Infinity
console.log("10" / 2) //Funciona mesmo com o valor sendo uma string, porem se o valor mudar para um desconhecida tipo (10.2) o JS nao reconhece e retorna como Nan
console.log("Hercules" * 2) // Nao funciona na linguagem JS, em algumas linguagem sim, pois multiplica a string por 2
console.log(0.1 + 0.7) //Gera um numero grande porem imprecisos por conta da sua especificação que é muito mais rápida do que a especificação que é 100% precisa gerando mais lentidão
// console.log(10.toString()) // Da erro pois nao funciona em valor literal
console.log((10.345).toFixed(2)) //Este jeito funciona em valor literal
console.log('3' + 2) //Caso faça isso saiba que o sinal de + vai da mais importância a STRING do que a soma, então no caso de SOMA, ele vai juntar gerando assim um resultado 32 e nao 5
