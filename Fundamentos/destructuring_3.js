function rand({min = 0, max = 100}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 60, min: 50} 
console.log(rand(obj))  //essa atribuição serve para deixar o valor aleatório e positivos entre 50 e 60
console.log(rand({min: 95})) //O valor gerado será de 95 a 100
console.log(rand({})) //Gera valor aleatórios entre 0 e 100