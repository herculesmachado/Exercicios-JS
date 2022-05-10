let nome = 'Lucas'

const vagaDeEmprego = function (documento) {
    if(documento) {
        console.log('Contratado')
        console.log(`Parabéns ${nome} você foi contratado!! Começa amanhã.`)
    } else {
        console.log(`Infelizmente ${nome} você não foi aprovado, tente da proxima vez!`) 
    }
}

vagaDeEmprego()