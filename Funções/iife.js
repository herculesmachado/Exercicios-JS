// IIFE => Immediately Invoked Function Expression

// Funções auto-invocada: é uma função anónima que na hora da chamada voce auto invoca ela na execução dessa função

// Uma das suas utilidade é quando voce ta usando o browser e quer sair do escopo global, então tudo que voce escrever nela vai ser escopo local e não escopo global o que vai ajudar muito

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// É um padrão muito usado 
