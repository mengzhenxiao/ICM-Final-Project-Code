class ButtonLogin{
 constructor(a,c){
 this.x=windowWidth/2;
   this.y=a;
   this.r=100;
   this.con=c;
 }

 show(){
   noStroke();
   fill('#b7b7b7');
   ellipseMode(CENTER);
   ellipse(this.x+2,this.y+2,this.r,this.r);
  fill('#f08c8e');
  ellipse(this.x,this.y,this.r,this.r);
   textSize(18);
   textAlign(CENTER);
   fill('#305f72');
   textStyle(BOLD);
   text(this.con,this.x,this.y+8);
 }

 shake(){
   let d=dist(mouseX,mouseY,this.x,this.y);
   if(d<50 && this.r<110){
   this.r++;
 }else if(this.r>=110){
   this.r=100;
 }
 }

 pressed1(){
   let d=dist(mouseX,mouseY,this.x,this.y);
   if(d<50 & mouseIsPressed){
     //this.x=this.x+200;
     fill('#f08c8e');
     ellipse(this.x,this.y,this.r,this.r);
     this.r=this.r+50;
     let myLink = createA(location.href='write_positve_page.html','');
 }
}

pressed2(){
  let d=dist(mouseX,mouseY,this.x,this.y);
  if(d<50 & mouseIsPressed){
  savePositive();
  fill('#f08c8e');
  ellipse(this.x,this.y,this.r,this.r);
  this.r=this.r+50;
}
}


pressed3(){
  let d=dist(mouseX,mouseY,this.x,this.y);
  if(d<50 & mouseIsPressed){
    let myLink = createA(location.href='submit_page.html','');
}
}

pressed4(){
  let d=dist(mouseX,mouseY,this.x,this.y);
  if(d<50 & mouseIsPressed){
    //this.x=this.x+200;
    fill('#f08c8e');
    ellipse(this.x,this.y,this.r,this.r);
    this.r=this.r+50;
    let myLink = createA(location.href='frontpage.html','');
}
}


}
