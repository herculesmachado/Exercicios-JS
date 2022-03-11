// This é uma forma de referenciar o objeto atual daquela atuação
// Em JS o This pode ser chamado de diferente modos, o que pode ser meio confuso
// This é sempre referenciado ao código que esta em execução naquele momento
// Quando se tem uma função tradicional usando a palavra 'function e passando os parâmetros o 'this pode variar de acordo com quem chamou a função
// Quando voe tem uma função tradicional em JS definida por Function, o this pode variar
// Caso use uma 'Arrow function' o 'this' nao vai mudar nunca.
// O this será definido quando a função for definida, ai neste momento ele vai pegar o this e associar em qual contexto a função foi definida, o que é chamada de 'Thislecxos'
// A construção é bem simples dela e bem enxuta
// Contexto Lecxos é o contexto em qual a função foi escrita, no momento em que a função foi escrita no contexto global, isso é se ele for uma função arrow
// Caso foi uma função normal que o this pode variar dependendo do contexto
// Tem como amarrar o this em uma função normal para que ele nunca varie, partir de uma função bind
