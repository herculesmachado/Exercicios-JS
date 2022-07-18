//A ideia do callback é voce chamar uma função para outra função e em um determinado evento acontecer, essa função que foi chamada vai ser disparada, vai ser chamada de volta, ela pode ser chamada varias vezes ou apenas um vez
const fabricantes = ["Mercedes", "BMW", "Chevrolet"];

const imprimir = function (nome, indice) {
  //O +1 é pra a contagem começar a partir do índice 1 e nao do 0 como padrão
  console.log(`${indice + 1}. ${nome}`);
};
//Para cada elemento que ele encontrar vai ser chamado 
fabricantes.forEach(imprimir);

//O parâmetro (fabricante) é justamente cada um dos elementos da Array
fabricantes.forEach((fabricante) => console.log(fabricante));

// O evento é um loop que quando ele encontra um novo elemento ele dispara um evento que foi o que voce chamou