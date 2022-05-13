function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo Private
    let velocidadeAtual = 0

    //Atributo Public
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método Public
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro (350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())