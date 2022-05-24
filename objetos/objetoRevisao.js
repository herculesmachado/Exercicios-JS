const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'André',
        idade: 34,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 346,
        }
    },
    condutores: [{
      nome: 'Julia',
      idade: 19
    }, {
        nome: 'Debora',
        idade: 20,
    }],
}
console.log(carro.proprietario)

carro.proprietario.endereco = 1000
carro['proprietario']['endereco'] = 'Rua Hercules'
console.log(carro)

delete carro.condutores
console.log(carro)


