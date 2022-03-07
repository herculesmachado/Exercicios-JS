

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numero) {
    if (x == 5) { 
        break // O break não age no bloco IF, mas sim no bloco mais proximo a ele do tipo for/while/switch
                 // Nesse caso ele vai desviar a aplicação para fora do bloco, não pra fora do if, mas sim no bloco mais perto dele que neste caso é o for
    }
    console.log(`${x} = ${numero[x]}`)
}

for (y in numero) {
    if (y == 5) {
        continue //Ele vai interromper a repetição atual e vai para a proxima repetição
                        // Ele não age no laço if, mas ele vai agir no bloco mais proximo do tipo for/while
                         // Quando chegou no índice 5, ele para a repetição e vai pra proxima
    }
    console.log(`${y}  = ${numero[y]}`)
}


//NÃO USAR DE JEITO NENHUM
externo: //rotulo
for (a  in numero) {
    for (b in numero) {
        if (a == 2 && b == 3) {
            break externo // Aqui o break nao vai mais agir no bloco mais interno e sim no bloco mais externo
        }
         console.log(`Par = ${a}, ${b}`)
    }
}