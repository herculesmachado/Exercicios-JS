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

const criarPessoa = name => {
    return{
        falar: () => console.log(`Meu nome é ${name}`)
    }
}

const p2 = new Pessoa ('João')
p2.falar()