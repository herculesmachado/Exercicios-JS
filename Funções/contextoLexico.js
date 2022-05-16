const valor = 'Global'

function minhaFuncao (){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()

//no contexto na qual a função foi escrita a minha função vai achar no caso o valor que foi declarado primeiro, no caso o valor 'Global'. Porque quando uma função foi declarada dentro de javascript ela não só tem o seu conteúdo interno, o seu nome, os parâmetros etc... Ela também carrega consigo uma consciência do local que ela foi definida, isso tudo tem haver com o conceito de Closures