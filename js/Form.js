class Form {
  constructor() {
    //Criando os elementos presentes no formulário
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "título do jogo");
    this.greeting = createElement("h2");
  }

  setElementPosition() {
    //Definindo a posição dos elementos presentes no formulário (constructor)
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }


  hide() {
   //Função que faz os elementos do formulário desaparecam da tela
    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();
  }

  handleMousePressed() {
   //Função de pressionamento da tecla
   this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      /*O símbolo usado para escrever a mensagem abaixo(laranja) é a crase(assento invertido) */
      var message = `
        Olá ${this.input.value()}
        </br>espere outro jogador entrar...`;
        this.greeting.html(message);
        player.name = this.input.value();
        player.index = 1;
   });
  }

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
  }
}
