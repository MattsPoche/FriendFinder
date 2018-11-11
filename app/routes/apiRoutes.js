//dependencies

var friends = require("../data/friends.json");

//routing

module.exports = function(app) {
    //api get route
    app.get("api/friends", function(req, res) {
        res.json(friends);
    });
}