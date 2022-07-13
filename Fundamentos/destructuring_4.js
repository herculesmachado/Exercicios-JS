function rand([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min] //O que é min passa a ser max e o que é max passa a ser min
    const valor = Math.random() * (max - min) + min //Em uma função rand eu tenho que sempre utilizar uma const para passar o Math.random 
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([950]))
console.log(rand([, 10]))
console.log(rand([]))
