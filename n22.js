function N22(){
  
  background(n22)
  
  //1º retangulo
  if(mouseX >= 250 && mouseX <= 478 && mouseY >= 270 && mouseY <= 305){
    fill(255, 255, 255, 100)
    yPeso = 270 -20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(250, 270, 230, 40)
  
  //2º retangulo
   if(mouseX >= 250 && mouseX <= 478 && mouseY >= 320 && mouseY <= 353){
    fill(255, 255, 255, 100)
    yPeso = 320 - 20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(250, 320, 230, 40)
  
  //3º retangulo
   if(mouseX >= 250 && mouseX <= 478 && mouseY >= 370 && mouseY <= 405){
    fill(255, 255, 255, 100)
    yPeso = 370 - 20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(250, 370, 230, 40)
  
  //4º retangulo
  
   if(mouseX >= 250 && mouseX <= 478 && mouseY >= 420 && mouseY <= 455){
    fill(255, 255, 255, 100)
    yPeso = 420 - 20
  }else{
    fill(0, 0, 0) //Retangulo preto
  }
  
  rect(250, 420, 230, 40)
  
  textAlign(CENTER)
  
  fill(250, 250, 250) //cor da letra é branco
  textFont(font)
  textSize(20)
  text('A) x = 5', 250, 277, 230, 25)
  text('B) x = 4', 250, 328, 230, 25) //Certa
  text('C) x = 13', 250, 376, 230, 25)
  text('D) x = 2,5', 250, 427, 230, 25)
  
 
  imagem(imgPeso, xPeso+100, yPeso, 0.07)
  
}