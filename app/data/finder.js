module.exports = function(data) {
    var totalScore = 0;
    var scoreDif = 25; 
    var friendScore = 0;
    var index = 0;
    data[data.length - 1].scores.forEach(element => {
        totalScore += parseInt(element);
    });

    for(var i = 0; i < data.length - 1; i++) {
        friendScore = 0;
        for(var j = 0; j < data[i].scores.length; j++){
            friendScore += parseInt(data[i].scores[j]);
        }
        if(scoreDif > Math.abs(totalScore - friendScore)){
            scoreDif = Math.abs(totalScore - friendScore);
            index = i;
        }
    }
    console.log(friendScore, totalScore, friendScore - totalScore);
    return data[index].name;
}