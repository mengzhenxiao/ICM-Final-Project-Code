let p3x;
let p3y;
let p4x;
let p4y;
let p5y;

let millisecond1;
let millisecond2;
let millisecond3;
let millisecond4;


let positiveData;
let positiveWords;
let order;
let keys;

let canvas;
let loginButton;

let w;
let h;
let line;



function preload() {
positiveData = loadJSON("/all");
}

function setup(){
  //creat canvas
  canvas=createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  // login button part
  loginButton=new ButtonLogin((windowHeight/2)+(windowHeight/30)*7,'BACK');

  //make sentences into an array
  keys = Object.keys(positiveData.words);
  console.log(keys);
  // random number of the array
  order = floor(random(0,keys.length));
  let number = keys[order];
  //positive words variable from Json
  positiveWords = positiveData.words[number];

    w=windowWidth;
    h=windowHeight;
    line=0;
}

function draw (){
  background('#f1d0b5');
  backgroundlight();
  add();
  showUp();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function backgroundlight(){
  for (var x = 0; x <= windowWidth-50; x = x + 50) {
    for (var y = 0; y <= windowHeight; y = y + 50) {
      strokeWeight(2);
      stroke(200)
        fill('#f1d0b5');
      rect(x, y, 50, 50);
    }
    }
    var x=0;
    var line=0;
    for (var i = 0; i < keys.length-1; i++) {
        strokeWeight(2);
        stroke(200)
          fill('#fecb2f');
          if(x<windowWidth-50){
        rect(x,50*line, 50, 50);
        x=x+50;
      }else{
        x=0;
        line++;
        rect(x,50*line, 50, 50);
        x=50;
      }
      }
  }

function add(){
  rectMode(CENTER);
  strokeWeight(2);
  stroke(200)
fill('#fecb2f');
        rect(windowWidth/2,windowHeight/2,w,h);
        if(w>50 ){
          w=w-9;
          millisecond1 = millis();
        }
        if(h>50){
          h=h-5;
        }
        else if(w=50){
          rectMode(CORNER);
          millisecond2 = millis();
          if(millisecond2 > millisecond1+1000){
          backgroundlight();

          addto();

        }
          if(millisecond2 > millisecond1+2000){
            noStroke();
            loginButton.show(windowHeight);
            loginButton.shake();
            loginButton.pressed4();
            let word1 =createElement('h1','Thank you!');
            let word2 =createElement('h2','Your positive energy has been saved.');
        }
        }
}




function showUp() {
  rectMode(CORNER);
  let ww=windowWidth;
 let howManyperline= floor(ww/50);
  // console.log(howManyperline);
let xn=floor(mouseX/50)+1;
let yn=floor(mouseY/50);
let order=howManyperline*yn+xn;
// console.log(order);
if(order<=keys.length & mouseIsPressed){
 if(mouseX<windowWidth/2){
  fill('#b7b7b7');
  rect(mouseX+4,mouseY+4,650,80);
 fill(255);
 rect(mouseX,mouseY,650,80);
 fill(100);
 let nn=keys[order-1];
let showword=positiveData.words[nn];
console.log(showword);
textSize(18);
 text(showword,mouseX+330,mouseY+50);
}
 else {
   fill('#b7b7b7');
   rect(mouseX+4-650,mouseY+4,650,80);
  fill(255);
  rect(mouseX-650,mouseY,650,80);
  fill(100);
  let nn=keys[order-1];
 let showword=positiveData.words[nn];
 console.log(showword);
 textSize(18);
  text(showword,mouseX+330-650,mouseY+50);
   }
  }
}


function addto(){
  strokeWeight(2);
  stroke(200)
let xx;
  let yy;
  let ww=windowWidth;
 let howManyperline= floor(ww/50);
 let a=keys.length/howManyperline;
 if (floor(a)==a){
   let whichline=keys.length/howManyperline;
   let mm=(whichline-1)*howManyperline;
    xx=keys.length*50-50;
   yy=whichline;
 }else{
   let whichline=floor(keys.length/howManyperline)+1;
   let mm=(whichline-1)*howManyperline;
   xx=(keys.length-mm)*50-50;
   yy=(whichline-1)*50;
 }
fill('#f5b200');
rect(xx,yy,50,50);
}
