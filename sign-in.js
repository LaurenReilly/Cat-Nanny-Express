//handle username input on sign-in page
function setName() {
    //nasty words we don't want people using
    var badWords = ["cunt","fuck","shit"];
    //username entered by player into input box
    var userName = document.getElementById("playerName").value;
    //submit button
    var userNameSubmit = document.getElementById("userNameSubmit");
    //initializing player score to zero so we can store it in localStorage
    //and it will reset everytime the game starts over
    var score = 0;
    //prevents user from progressing if they use foul language!
    if (badWords.includes(userName.toLowerCase())) {
        userNameSubmit.style.backgroundColor = "#FC4A1A";
        userNameSubmit.style.color = "#F7B733";
        userNameSubmit.innerHTML = "Our animals have sensitive ears!!!"
    } else {
        //set username and initial score in the localStorage so we can use it across all our pages
        localStorage.setItem("name", `${userName}`)
        localStorage.setItem("score",`${score}`)
        //change screen to the gamepage
        window.location = "game.html"
    }
}