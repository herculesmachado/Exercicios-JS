const sequencia = {
    _valor:  1, //Convenção ou seja, é uma pretensão que será apenas usada internamente
    // Os métodos Get e Set são que dentro destas funções os valores serão acessados
    get valor() { return this._valor++}, // Ex Line: vou pegar o valor e vou acrescentar no valor seguinte
    set valor(valor) { //Ex Line: passei um parâmetro e neste métodos vou atribuir o valor que recebi como parâmetro ao valor do this._valor
        if (valor > this._valor) {
            this._valor = valor
        } //Ele so vai entrar neste teste se o valor for maior que o parâmetro, caso contrario ele n vai entrar, ja que ele apenas vai para frente e nao para trás
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //Pelo fato de tar tentando por um valor menor do que já esta, o valor 900 não vai entrar, pois apenas irá para frente
console.log(sequencia.valor, sequencia.valor)

