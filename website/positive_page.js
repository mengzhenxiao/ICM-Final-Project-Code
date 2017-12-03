let p3x;
let p3y;
let p4x;
let p4y;
let p5y;

let millisecond1;
let millisecond2;


let positiveData;
let positiveWords;
let order;
let keys;

let canvas;
let loginButton;



function preload() {
positiveData = loadJSON("/all");
}

function setup(){
  //creat canvas
  canvas=createCanvas(windowWidth,windowHeight*2);
  canvas.position(0,0);
  canvas.style('z-index','-3');

  // login button part
  loginButton=new ButtonLogin((windowHeight/2)*3+(windowHeight/30)*7,'SEND');

  //make sentences into an array
  keys = Object.keys(positiveData.words);
  console.log(keys);
  // random number of the array
  order = floor(random(0,keys.length));
  let number = keys[order];
  //positive words variable from Json
  positiveWords = positiveData.words[number];


   p3x=windowWidth/5*4-54;
   p3y=windowHeight/12*5+150;
   p4x=windowWidth/5+50;
   p4y=windowHeight/12*5+150;
   p5y=windowHeight/12*5+150;
   millisecond1 = millis();

}

function draw (){
  background('#f1d0b5');
  loginButton.show(windowHeight);
  loginButton.shake();
  loginButton.pressed2();
  loginButton.pressed3();

  //envelop
  envelop();
  millisecond2 = millis();
  //console.log(millisecond1-millisecond2);
  if(millisecond2 > millisecond1+1500){
  inner();
  }

  text(positiveWords, windowWidth/2, windowHeight/5,windowWidth/4*3, windowHeight/10);
}


function savePositive() {
  let newPositive = select('#userInput').value();
  let time = second();
  let f=keys.length+1;
  loadJSON('add/'+f+'/'+newPositive);
}


function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


function backgroundlight(){
  for (var x = 0; x <= windowWidth; x = x + 50) {
    for (var y = windowHeight+50; y <= windowHeight*2; y = y + 50) {
      strokeWeight(2);
      stroke(200)
        fill('#f1d0b5');
      rect(x, y, 50, 50);
    }
    }
    var x=0;
    var line=0;
    for (var i = 0; i < keys.length; i++) {
        strokeWeight(2);
        stroke(200)
          fill('#fecb2f');
          if(x<windowWidth){
        rect(x,50*line+windowHeight+50, 50, 50);
        x=x+50;
      }else{
        x=0;
        line++;
        rect(x,50*line+windowHeight+50, 50, 50);
      }
      }
  }


//inner
function inner(){
fill(220);
let quad1=quad(windowWidth/5, windowHeight/12*5, windowWidth/5*4,  windowHeight/12*5, windowWidth/5*4-50, windowHeight/12*5+154, windowWidth/5+50, windowHeight/12*5+154);

  if(p3y>windowHeight/12*5-150){
   p3y=p3y-5;
   p4y=p4y-5;
  fill(255);
  let quad2=quad(windowWidth/5, windowHeight/12*5, windowWidth/5*4-4,  windowHeight/12*5, p3x, p3y, p4x, p4y);
}else{
  fill(255);
  let quad2=quad(windowWidth/5, windowHeight/12*5, windowWidth/5*4-4,  windowHeight/12*5, p3x, windowHeight/12*5-150, p4x, windowHeight/12*5-150);
  if(p5y>windowHeight/12*5-200){
    p5y=p5y-5;
    fill(180);
  quad(p3x,windowHeight/12*5+150,p4x,windowHeight/12*5+150,p4x,p5y,p3x,p5y);
  fill('#fdca42');
  quad(p3x-4,windowHeight/12*5+154,p4x-4,windowHeight/12*5+154,p4x-4,p5y+5,p3x-4,p5y+4);
}else{
  fill(180);
  quad(p3x,windowHeight/12*5+150,p4x,windowHeight/12*5+150,p4x,windowHeight/12*5-200,p3x,windowHeight/12*5-200);
  fill('#fdca42');
  quad(p3x-4,windowHeight/12*5+154,p4x-4,windowHeight/12*5+154,p4x-4,windowHeight/12*5-196,p3x-4,windowHeight/12*5-196);
  textAlign(CENTER);
  fill(0, 102, 153);
  textSize(20);
  text('Hi', windowWidth/10*3, windowHeight/8*2,windowWidth/5*2, windowHeight/10);
  text('Someone loves you', windowWidth/11*4, windowHeight/8*5,windowWidth/5*2, windowHeight/10);
  textSize(24);
  textStyle(BOLD);
  text('" '+positiveWords+' "', windowWidth/2, windowHeight/10*4,windowWidth/5*2, windowHeight/10);
  }
 }
}
