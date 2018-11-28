//get username and score from local storage
var userName = localStorage.getItem("name");
var score = localStorage.getItem("score");

//putting the score on the page
var scoreContainer = document.getElementById("scoreContainer");
scoreContainer.innerHTML = score;

//play again button

//download information from firebase and display it
