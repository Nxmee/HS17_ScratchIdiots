var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var csv = require('ya-csv');

var app = express();
app.use(express.static(path.join(__dirname, "")));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "index.html"));
});

app.post('/score', function(request,response){
    var category = request.body.category;
    var name = request.body.name;
    var score = request.body.score;
    var time = request.body.time;

    var database = csv.createCsvFileWriter("scores.csv", {"flags": "a"});
    var data = [category, name, score, time];

    database.writeRecord(data);
    database.writeStream.end();
    response.sendFile(path.join(__dirname, "./ServerTest/ServerTest.html"));

});

app.get("/score", function(request, response) {
    var reader = csv.createCsvFileReader("scores.csv");
    reader.setColumnNames(['category','name', 'score', 'time']);

    var scores = [];
    reader.addListener('data', function(data) {
        scores.push(data);
    });

    reader.addListener('end', function(){
        response.send(scores);
    })
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Vowel Removements listening at http://%s:%s", host, port);
});
server.timeout = 1000;
/*function isEmpty(str) {
    return (!str || 0 === str.length);
   if(isEmpty(name)) {
       response.send("Please make sure you enter your name.");
 }*/