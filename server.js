var express = require("express");

var app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send("hello world");
});

app.listen(PORT, function(){
    console.log("App listening on Port: " + PORT);
});