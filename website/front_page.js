let loadC;
let loadingC;
let img;

function preload() {
  img = loadImage("logo.png");
}


function setup() {
  //createCanvas
  canvas=createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  //load loading circle
  loadC=new LoadCircle();
  loadingC=new LoadingCircle();
  }


function draw() {
  backgroundlight();//call background

  //load logo img
   smooth();
   imageMode(CENTER);
   let w=450;
   let h=150;
   image(img, windowWidth/2, windowHeight/2-100,w,h);

   //call loading circle
   loadC.show();
   loadingC.show();
   loadingC.change();
}


//background
function backgroundlight(){
  for (var x = 0; x <= windowWidth-50; x = x + 50) {
    for (var y = 0; y <= windowHeight; y = y + 50) {
      strokeWeight(2);
      stroke(200)
        fill('#f1d0b5');
      rect(x, y, 50, 50);
    }
  }
}
