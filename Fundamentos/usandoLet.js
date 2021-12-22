var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//Nos scope com let, ele sempre vai da prioridade maior em scope menores, caso nao encontrado o valor sugerido para a variável, ele começa a procurar valores em um scope maior, por isso da sua importância em ser usado direto nos códigos