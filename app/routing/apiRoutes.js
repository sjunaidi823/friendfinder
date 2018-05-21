var path = require('path');
var friendsData = require("../data/friends");


// ROUTING
module.exports = function (app) {
    // API GET Requests


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })


    // Below code handles when a user submits a form and thus submits data to the server.


    app.post("/api/friends", function (req, res) {
        // console.log(res);
        var newFriend = req.body;
        var newFriendScores = newFriend.scores;
        var totalDifference = 0;
        var allDifferences = [];
        for (var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i].name);
            //	totalDifference = 0;
            // We then loop through all the scores of each friend
            for (var j = 0; j < 10; j++) {
                // this adds the numerical answers of each friend to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
                totalDifference += Math.abs(friendsData[i].scores[j] - newFriend.scores[j]);
            }

            // each total difference, for each potential friend, is pushed into the allDifferences array 
            allDifferences.push(totalDifference);
            // total difference is reset back to zero
            totalDifference = 0;
        }

        //best match will give the smallest values 
        var bestMatch = friendsData[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

        res.send(bestMatch);
        console.log(bestMatch);
    });
}