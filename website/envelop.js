function envelop(){
  textSize(24);
  textStyle(BOLD);
  textAlign(CENTER);
  fill(0, 102, 153);
  text('You have got a new message!', windowWidth/2+5, windowHeight/7*2,windowWidth/5*2, windowHeight/10);

  rectMode(CENTER);
  fill(220);
  rect(windowWidth/2+4, windowHeight/3*2+4,windowWidth/5*3, windowHeight/2);

  fill(255);
  rect(windowWidth/2, windowHeight/3*2,windowWidth/5*3, windowHeight/2);

 fill(220);
 quad(windowWidth/5, windowHeight/12*5, windowWidth/5*4,  windowHeight/12*5, windowWidth/5*4-50, windowHeight/12*5+154, windowWidth/5+50, windowHeight/12*5+154);
 fill(255);
 quad(windowWidth/5, windowHeight/12*5, windowWidth/5*4-4,  windowHeight/12*5, windowWidth/5*4-54, windowHeight/12*5+150, windowWidth/5+50, windowHeight/12*5+150);
 }
