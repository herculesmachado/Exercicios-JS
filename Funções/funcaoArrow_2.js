function Pessoa(){
    this.idade = 0

    setInterval(() => {
        //O this nao varia de acordo com quem ta chamando
        this.idade++
        console.log(this.idade)
    }, 1000)

}

new Pessoa