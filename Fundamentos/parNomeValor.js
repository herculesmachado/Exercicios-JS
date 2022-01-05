// par nome/valor

const saudacao = 'opa' //contexto léxico 1 

function exec() {
    const saudacao = 'falaaaa' //contexto léxico 2
    return saudacao

    //Esse contexto ele vai procurar no contexto mais restrito, se ele achar ele ja vai retornar o valor da função, caso nao encontrado ele vai procurar no contexto de cima, mais abrangente
}

//OBS: note que o nome 'saudacao' estão sendo usados nos dois contextos léxico, porem como estão em contextos diferente isso nao da problema

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: '32',
    peso: 90,
    endereco: {
        logradouro: 'rua Muito Legal',
        numero: 123
    }
}

// resultado
console.log(saudacao) //1
console.log(exec()) //2
console.log(cliente) //3