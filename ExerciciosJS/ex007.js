function baskara(ax2, bx, c) {
    let resultado = []
    let delta = (bx ** 2) - (4 * ax2 * c) //Formula do delta
    if (delta < 0) {
        return 'Delta Negativo'
    }
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2) //Resultado positivo
    let x2 = (+bx - Math.sqrt(delta)) / (2 * ax2) //Resultado negativo
    resultado.push(x1) //.push foi utilizado pegar o resultado da variavel x1 e x2
    resultado.push(x2)
    return resultado
}

console.log(baskara(1, 3, 2))
console.log(baskara(3, 0, 2))



//Em produção