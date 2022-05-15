function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo Private
    // Para deixar algo privado cria-se uma const ou let
    let velocidadeAtual = 0

    //Atributo Public
    //Para deixar algo visível ou publica, deve-se usar a palavra reservada "This" 
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

//Aqui eu estou instanciando a função NEW
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

console.log(typeof Ferrari)
console.log(typeof Carro)