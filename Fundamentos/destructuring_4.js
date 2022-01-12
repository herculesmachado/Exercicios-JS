function rand([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min] //O que é min passa a ser max e o que é max passa a ser min
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([950]))
console.log(rand([, 10]))
console.log(rand([]))
