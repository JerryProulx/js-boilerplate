var express = require("express");
var path = require("path");
var open = require("open");

var port = process.env.PORT;
var app = express();

app.get("/", function(req, res){
   res.sendFile(path.join(__dirname, "../client/index.html")); 
});

app.listen(port, function(err){
   if(err){
       console.log(err);
   } else {
       open("http://localhost:" + port,  "chrome");
       console.log("server started!");
   }
});