let keys;
let userInput;
let canvas;
let loginButton;

//load json file
function preload() {
positiveData = loadJSON("/all");
}

function setup(){
//make elements in json file into an array
keys = Object.keys(positiveData.words);

//createCanvas
canvas=createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index','-1');

//load button
loginButton=new ButtonLogin((windowHeight/2)+(windowHeight/30)*7,'SUBMIT');
}


function draw (){
  backgroundlight();// call background

  //call button
  loginButton.show();
  loginButton.shake();
  loginButton.pressed1();
  showUp();//show text in each yellow block
}

//resize canvas when the window change
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


//background
function backgroundlight(){
  //background
  for (var x = 0; x <= windowWidth-50; x = x + 50) {
    for (var y = 0; y <= windowHeight; y = y + 50) {
      strokeWeight(2);
      stroke(200)
        fill('#f1d0b5');
      rect(x, y, 50, 50);
      }
    }

    //yellow blocks
    var x=0;
    var line=0;
    for (var i = 0; i < keys.length; i++) {
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



//show text in each yellow blocks
function showUp() {
  let ww=windowWidth;
  let howManyperline= floor(ww/50);
  let xn=floor(mouseX/50)+1;
  let yn=floor(mouseY/50);
  let order=howManyperline*yn+xn;

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
