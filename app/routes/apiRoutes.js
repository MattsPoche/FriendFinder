//dependencies

const fs = require("fs");
const path = require("path");
var friends = require("../data/friends.json");

//routing

module.exports = function(app) {
    //api get route
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //api post request
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        fs.writeFile(path.join(__dirname, "../data/friends.json"), JSON.stringify(friends), (err) => {
            if(err) throw(err);
        });
    });
}