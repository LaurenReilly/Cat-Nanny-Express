var database = firebase.database();

var highScoreContainer = document.querySelector('highScoreContainer');
var highScore = firebase.database().ref('highScores/');

//get username and score from local storage
var userName = localStorage.getItem("name");
var score = localStorage.getItem("score");

//putting the score on the page
var scoreContainer = document.getElementById("scoreContainer");
scoreContainer.innerHTML = score;

//Award a Nanny level based on score
function nannyLevel() {
    var nannyLevelContainer = document.getElementById("nannyLevel");
    if (score <= 400) {
        nannyLevelContainer.innerHTML = "Neglectful!";
    } else if (score >400 && score <= 700) {
        nannyLevelContainer.innerHTML = "Embarassing!";
    } else if (score >700 && score <= 800) {
        nannyLevelContainer.innerHTML = "Decent!";
    } else if (score >800 && score <= 1000) {
        nannyLevelContainer.innerHTML = "Aspirational!";
    } else if (score >1000 && score <= 1200) {
        nannyLevelContainer.innerHTML = "Brilliant!";
    } else if (score >1200 && score <= 1300) {
        nannyLevelContainer.innerHTML = "Marvelous!";
    } else if (score >1300 && score <= 1400) {
        nannyLevelContainer.innerHTML = "Supreme!";
    } else if (score >1400 && score <= 1500) {
        nannyLevelContainer.innerHTML = "Legendary!";
    } else if (score > 1500) {
        nannyLevelContainer.innerHTML = "Animal Whisperer!";
    }
}

nannyLevel();

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
        );
        
    }); 

    ourArray.sort(function(item1, item2) {
        return item2.finalScore - item1.finalScore;
    });

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