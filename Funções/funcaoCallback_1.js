const fabricantes = ['Mercedes', 'BMW', 'Chevrolet']

const imprimir = function (nome, indice) {

    //O +1é pra a contagem começar a partir do índice 1 e nao do 0 como padrão
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

//O parâmetro (fabricante) é justamente cada um dos elementos da Array
fabricantes.forEach(fabricante => console.log(fabricante))

// O evento é um loop que quando ele encontra um novo elemento ele dispara um evento que foi o que voce chamou