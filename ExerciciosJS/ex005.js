/*
Minha resolução (está correta)

function imprimirDinheiro(){
    console.log('R$',(0.1 + 0.2).toFixed(2))
}

imprimirDinheiro()*/

//Correção

function formatarValor(valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}

formatarValor(0.1 + 0.2)

//Exercício corrigido