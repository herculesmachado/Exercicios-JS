function Pessoa (name) {
    this.name = name

    this.falar =  function() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa ('Adalberto')
p1.falar()

//OBS: Posso criar objetos a partir de uma função construtora, a partir de uma classe, como também a partir de uma função factory