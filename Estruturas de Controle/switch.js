const imprimirResultado = function (nota) {
    switch (Math.ceil(nota)) {
        //A estrutura do switch não retornar um boolean, mas sim um valor
        case 10:
            //Neste caso do case 10 e 9, no switch eu posso integrar os dois cases em uma chamada apenas de console, como é o caso desses exemplos
        case 9:
            console.log('Honra')
            break //Este break é necessário para que o case entenda que o bloco de código termina ali e vá para os próximos caso seja necessário, caso o contrario sem o break ele vai executar todos o que não interessante 
        case 8:  case 7: 
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break 
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: //Este default é basicamente um else... é a ultima execução caso nada seja feito nos outros cases acima
            console.log('Tente outra vez')
    }
}
//essa syntax não é suportada pelo Switch: (case 6, 5, 4:)
//Em JS o switch é um pouco limitado pois nao pode por numero float, ou seja, numero quebrado 

imprimirResultado(10)
imprimirResultado(6.1)
imprimirResultado(-1)
imprimirResultado(11)