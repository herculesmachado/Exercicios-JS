// Está forma de uso quando utilizado no browser, ao fazer o onclick para o retorno, não retorna o name, pois não reconhece e retorna undefined, sem contar que tem que por (this) para deixar ele publica
class Pessoa {
    constructor(name) {
        this.name = name
    }

    falar() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa ('Adalberto')
p1.falar()


//Fazendo assim ao ser usado no browser, o name retorna ao ser clicado, e não precisa de (this) na chamado do console.log
const criarPessoa = name => {
    return{
        falar: () => console.log(`Meu nome é ${name}`)
    }
}

const p2 = new Pessoa ('João')
p2.falar()