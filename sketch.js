var canvas;
var backgroundImage;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //Banco de dados inicializado
  database = firebase.database();

  //Criação do objeto de jogo: chamada da classe 'Game' e do método 'start';
  game = new Game();
  game.start();
 
}

function draw() {
  background(backgroundImage);
}

//Função da p5 que redimensiona a janela do navegador
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
