let imgCenario;
let imgPersonagem;
let cenario;
let gameSound;
let personagem;
let imgInimigo;
let inimigo;

function preload(){
  imgCenario = loadImage('imagens/cenario/floresta.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  imgInimigo = loadImage('imagens/inimigos/gotinha.png');
  gameSound = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 3);
  // personagem = new Personagem(imgPersonagem, 220, 270, 4, 4);
  personagem = new Personagem(imgPersonagem, 220, 270, 4, 4, 0, windowHeight - 140, 110, 135);
  // inimigo = new Inimigo(matrix, image, x, y, width, height, heightSprite, widthSprite);
  frameRate(40);
  gameSound.loop();
  gameSound.setVolume(0.002);
}

function draw() {
  cenario.exibe();
  cenario.mover();
  personagem.exibe();
}





