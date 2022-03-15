function Pessoa() {
    this.idade = 0

    // Essa função dispara uma outra função em um determinado tempo que voce passou
    const self = this
    setInterval(function() {
        self.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) //Mil milissegundos para cada disparo 
}

new Pessoa