//Declaração de variaveis globais gerais (tela)
var tela = 0
//Declaração de variaveis de imagens/fontes/sons
var imgFundoMenu, imgFundoLiso, imgBalança, imgPeso, imgCreditos, imgInstruçoes, img1Pergunta, imgFinal
var font
var songTriste, songAplausos, songN1, songN2, songCredito, songInstrucoes

//Declaração de imagens da parte de jogar
var n11, n12, n21, n22, n31, n32, n41, n42

//Definições dos botões do menu
var focoBtnMenu = 0

//Variaveis do peso
var xPeso = 80, yPeso = 250

//Mostrar tudo para mim
//var devJogo = true

function mostraCoordenadas(){
  push()
  textSize(15)
  text('(mouseX,mouseY) = (' + mouseX.toFixed(1) + ',' + mouseY.toFixed(1) + ')' ,150,25)
  pop()
}

function imagem(img, x, y, escala){
  let larg = img.width
  let alt = img.height
  image(img, x, y, larg*escala, alt*escala)
}

//Função de carregamento de sons, figuras e fontes
function preload(){
  imgFundoMenu = loadImage('imagens/fundoMenu.png')
  imgFundoLiso = loadImage('imagens/fundoLiso.png')
  imgBalança = loadImage('imagens/balança.png')
  imgPeso = loadImage('imagens/peso.png')
  imgCreditos = loadImage('imagens/creditos.jpg')
  imgInstruçoes = loadImage('imagens/instrucoes.png')
  font = loadFont('fontes/joystix.ttf')
  songAplausos = createAudio('Sons/Aplausos.mp3')
  songN1 = createAudio('Sons/Nivel1Feliz.mp3')
  songN2 = createAudio('Sons/Nivel2Feliz.mp3')
  songCredito = createAudio('Sons/musicCreditos.mp3')
  songInstrucoes = createAudio('Sons/musicInstrucoes.mp3')
  songTriste = createAudio('Sons/AA_triste.mp3')
  n11 = loadImage('imagens/n11pgt.png')
  n12 = loadImage('imagens/n12pgt.png')
  n21 = loadImage('imagens/n21pgt.png')
  n22 = loadImage('imagens/n22pgt.png')
  n31 = loadImage('imagens/n31pgt.png')
  n32 = loadImage('imagens/n32pgt.png')
  n41 = loadImage('imagens/n41pgt.png')
  n42 = loadImage('imagens/n42pgt.png')
  imgFinal = loadImage('imagens/final.png')
 
}

function setup() {
  createCanvas(550, 500);

}

function draw() {
  background(127)
  
  //Tela de menu
  if(tela==0){
    menu()
  }
  //Tela de instruções
  else if(tela==1){
    instrucoes()
  }
  //Tela de creditos
  else if(tela==2){
    creditos()
  }
  else if(tela==3){
    N11()
  }
  else if(tela==4){
    N12()
  }
  else if(tela==5){
    N21()
  }
  else if(tela==6){
    N22()
  }
  else if(tela==7){
    N31()
  }
  else if(tela==8){
    N32()
  }else if(tela==9){
    N41()
  }else if(tela==10){
    N42()
  }
  else if(tela==11){
    final()
  }
  //Tudo que deve ser mostrado para mim
  
}