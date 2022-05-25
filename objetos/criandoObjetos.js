// usando a notação literal
const obj = {

}
console.log(obj)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj1 = new Object
console.log(obj1)

// Funções construtoras
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('caneta', 4.66, 0.2)
console.log(p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas) 
        }
    }
}
const f1 = criarFuncionario('Pedro', 7230, 4)
const f2 = criarFuncionario('Hercules', 1250, 2)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna objeto...
const fromJASON = JSON.parse('{"info": "Eu sou JASON"}')
console.log(fromJASON)