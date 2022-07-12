//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

/*
Minha resolução (Correta)

function divisao(a, b){
    const divisor = a / b
    let resto = 2
    console.log(`Aqui é a divisão: ${divisor.toFixed(2)}`)
    console.log(`Aqui é o resto da divisão: ${resto}`)
}

divisao(27, 9)*/


//Resolução corrigida

function divisao(dividendo, divisor){
    console.log('Resultado', + Math.floor(dividendo/divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 3)

//Exercício corrigido, ambas as resoluções estão certas