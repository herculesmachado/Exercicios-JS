let dobro = function (a) {
    return 2 * a
}

// A diferença é a troca do function pelas setas

dobro = (a) => {
    return 2 * a
}

//Muito usado em função de um linha 
dobro = a => 2 * a // Return implícito

console.log(dobro(Math.PI))


let ola = function () {
    return 'ola'
}

//Melhor forma de trabalho
ola = () => 'ola' 

ola = _ => 'ola' //Com o underline é um parâmetro
console.log(ola())

//As funções Arrow sao as reduzidas de uma linha com o numero