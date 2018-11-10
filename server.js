const express = require("express");
const bodyParser = require("body-parser");

var app = express();

const PORT = process.env.PORT || 3000;

//sets up express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Router
//The below points the server to a series of route files.

require("./app/routes/htmlRoutes")(app);


app.get("/", function(req, res){
    res.send("Hello, World!");
});

app.listen(PORT, function(){
    console.log("App listening on Port: " + PORT);
});