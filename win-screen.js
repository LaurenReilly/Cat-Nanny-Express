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
   window.location = "sign-in.html";
}

//download information from firebase and display it
function highScoreList() {

   var scoresRef = firebase.database().ref('highScores/').orderByChild('highScores/finalScore').limitToFirst(10);

   scoresRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var nameFromDb = childSnapshot.val().name;
        var scoreFromDb = childSnapshot.val().finalScore;
        var highScore = `
        <div class="row border-bottom mt-3">
            <div class="col" style="font-size: 22px;" id="username">${nameFromDb}</div>
            <div class="col" style="font-size: 22px;" id="highscores">${scoreFromDb}</div>
        </div> ` 
        document.getElementById('highScoreList').innerHTML += highScore;
    });
  });



}

  highScoreList();