function mouseClicked(){
  
  if(tela == 0){
    
     //Jogar
  if(mouseX >= 145 && mouseX <= 370 && mouseY >= 274 && mouseY <= 314){
    fill(0, 0, 0)
    
    tela = 3
    //console.log("jogar")
    
  }else{
    fill(250, 250, 250, 100)
  }
  //instrução
  if(mouseX >= 145 && mouseX <= 370 && mouseY >= 345 && mouseY <= 375){
    
    tela = 1
    songInstrucoes.play()
    //console.log("instrucao")
    
  }
  //créditos
  if(mouseX >= 145 && mouseX <= 370 && mouseY >= 418 && mouseY <= 455){
    
    tela = 2
   songCredito.play()
    
    //console.log("credito")
    
  }
 
   //Jogando 
  }else{
    
    if(tela == 3){
      
      if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
        
        tela = 4
        songN1.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      songTriste.play()
      
    }
    
  }if(tela == 4){
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
        
        //songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      tela = 5
      songN1.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      songTriste.play()
      
    }
  } if(tela == 5){
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
        
        songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      //songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      tela = 6
      songN2.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      songTriste.play()
      
    }
  }if(tela == 6){
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
        
        songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      tela = 7
      songN1.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      //songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      songTriste.play()
      
    }
  }if(tela == 7){
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
        
        songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      //songN1.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      tela = 8
      songN2.play()
      
    }
  }if(tela == 8){
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
      
        tela = 9
        songN1.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      //songTriste.play()
      
    }
  }if(tela == 9){
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
        
        //songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      tela = 10
      songN1.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      songTriste.play()
      
    }
  }if(tela == 10){
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 270 && mouseY<= 310){
        
        songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 320 && mouseY<= 360){
      
      tela = 11
      songAplausos.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 370 && mouseY<= 410){
      
      //songTriste.play()
      
    }
    
    if(mouseX >= 250 && mouseX <= 480 && mouseY>= 420 && mouseY<= 460){
      
      songTriste.play()
      
    }
  }
}
  
  //Voltar
  if((tela == 1 || tela == 2 || tela == 11) && mouseX >= 20 && mouseX <= 98 && mouseY >=476 && mouseY <= 490){
    
    tela = 0
    songInstrucoes.stop()
    songCredito.stop()
  }
  
}