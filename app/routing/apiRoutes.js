//var path = require("path");
var friends = require('../data/friends')

module.exports = function(app){
	//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
	app.get("/api/friends", function(req, res) {
   		res.json(friends);
   	});

	//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
	app.post("/api/friends", function(req, res){
   		friends.push(req.body);
   		res.json(true);

   		//compareFriends(newFriend);
   	});
};//end module

function compareFriends(newFriend){
	var	friendValue = [];

	for (var i = 0; i < friends.length; i++) {

		var	friendValueArray = [];

   		for (var j = 0; j < friends[i].scores.length; j++) {
			//compare the difference between current user's scores against	
   			friendValueArray.push(Math.abs(newFriend.scores[j] - friends[i].scores[j]));
		};
		//Add up the differences to calculate the `totalDifference`.
		var friendScore = friendValueArray.reduce(getSum)

		friendValue.push(friends[i].name, friendScore);
   	};

   	console.log(friendValue[i]);
//display the friend with the highest score

};

function getSum(total, num) {
    return total + num;
}