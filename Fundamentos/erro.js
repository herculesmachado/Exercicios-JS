
function imprimirNomeGrande (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Sorry, Error of system')
    } 
} 
function tratarErroELancar (error) {
   //  throw new Error ('Error inesperado, volte em instantes!!')

    // throw 10
    // throw 'msg'
    // throw true
    throw {
        nome: 'Her',
        msg: error.mensagem,
        date: new Date

    }
}


const obj = { nome: 'Roberto'}
imprimirNomeGrande(obj)