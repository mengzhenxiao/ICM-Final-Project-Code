var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);


console.log('server is starting');

var express = require('express');//access code from a node package

var app = express();//create an express “app”

var server = app.listen(3000, listening);//add a callback

//the callback
function listening(){
console.log("listening...");
}

app.use(express.static('website'));//serve static files(index.html)


//write save route
app.get('/add/:sentence/:pwords',addData);
function addData(request,response){
  var data = request.params;
  var sentence = data.sentence;
  var pwords = data.pwords;

  words.words[sentence]= pwords;//take users' input into the positivewords json

  var da = JSON.stringify(words,null,2);
  fs.writeFile('words.json', da, finished);

  function finished(err){
    console.log('all set.');
  }

  var reply = {
    msg: "thank you"
  }
 response.send(reply);
}

app.get('/all',sendAll);

function sendAll(request,response){
  response.send(words);
}
