class Pessoa {
    constructor() {
        this.idade = 0

        // Essa função dispara uma outra função em um determinado tempo que voce passou
        const self = this //Self geralmente usado para usar com o THIS
        setInterval(function () {
            self.idade++
            console.log(self.idade)
        }/*.bind(this)*/, 1000) //Mil milissegundos para cada disparo 
    }
}

new Pessoa()
