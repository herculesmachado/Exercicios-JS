//Tem que tomar muito cuidado, pois ao atribuir o this a algum atributo, corre o risco de ir pro scoop global, o que nao é muito interessante, Cuidado
let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj); //Quando o this é posto com o .bind ele acaba se tornando nao mais do scoop global, mas sim agora do obj
comparaComThis(global); //False
comparaComThis(obj); //True

// essa função foi definida dentro de um modulo do Node, cada arquivo do Node representa um Modulo, então se for escrito dentro do modulo, nao vai para o scoop global
let comparaComThisArrow = (param) => console.log(this === param);
comparaComThis(global); //False
comparaComThis(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); //True
comparaComThisArrow(module.exports);

//This faz o que lhe foi atribuído
