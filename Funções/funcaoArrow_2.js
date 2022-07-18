class pessoa {
  //Essa forma é recomendada pelo es2015 (versão mais nova do JS) criando uma class e pondo dentro um constructor
  constructor() {
    this.idade = 0;

    setInterval(() => {
      //O this nao varia de acordo com quem ta chamando
      this.idade++;
      console.log(this.idade);
    }, 1000);
  }
}

new pessoa();
