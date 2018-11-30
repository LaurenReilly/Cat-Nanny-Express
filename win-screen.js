var database = firebase.database();


var highScoreContainer = document.querySelector('highScoreContainer');
var highScore = firebase.database().ref('highScores/');

//get username and score from local storage
var userName = localStorage.getItem("name");
var score = localStorage.getItem("score");

//putting the score on the page
var scoreContainer = document.getElementById("scoreContainer");
scoreContainer.innerHTML = score;

//play again button
function playAgain() {
   window.location = "index.html";
}

//download information from firebase and display it
function highScoreList() {

   var scoresRef = firebase.database().ref('highScores').orderByChild('/finalScore').limitToLast(5);

   scoresRef.once('value', function(snapshot) {
    var ourArray = [];
    
    snapshot.forEach(function(childSnapshot) {
        var nameFromDb = childSnapshot.val().name;
        var scoreFromDb = childSnapshot.val().finalScore;
        ourArray.push(
            {
                name: nameFromDb,
                finalScore: scoreFromDb
            }
        )
        
    }); 

    ourArray.sort(function(item1, item2) {
        return item2.finalScore - item1.finalScore;
    })

    ourArray.forEach(function(item){
        var highScore = `
        <div class="row border-bottom mt-3">
            <img src="images/paw.png" /><div class="col" style="font-size: 22px; color:#DFDCE3; font-family: Montserrat" id="username">${item.name}</div>
            <div class="col" style="font-size: 22px; color:#DFDCE3; font-family: Montserrat" id="highscores">${item.finalScore}</div>
        </div> ` 

        document.getElementById('highScoreList').innerHTML += highScore;
    })

  });




}

  highScoreList();