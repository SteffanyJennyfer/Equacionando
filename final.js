function final(){
  
  background(imgFinal)
  
  push()
    stroke(0, 0, 0)
    strokeWeight(3) //Espessura da borda
    fill(255, 255, 0)
    textFont(font)
    textSize(60)
    text('PARABÉNS', 187, 113, 350, 450)
  pop()
  
  push()
    rect(80, 275, 250, 150)
    strokeWeight(5)
    fill(0,0, 0)
    textFont(font)
    textSize(20)
    text('Você venceu', 80, 305, 250, 150)
    text('todas etapas', 80, 345, 250, 150)
    text('desse desafio!', 80, 385, 250, 150)
  pop()
  
  //push()
  if(mouseX >= 20 && mouseX <= 98 && mouseY >= 476 && mouseY <= 490){
    fill(255, 255, 255, 100)
  }else{
    fill(0, 0, 0)
  }
  
  rect(20, 479, 80, 20)
  
  textAlign(CENTER)
  
  fill(250, 250, 250)
  textFont(font)
  textSize(10)
  text('Voltar', 15, 483, 90, 20)
  //pop()
}