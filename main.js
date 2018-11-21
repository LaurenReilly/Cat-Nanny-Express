//animal object
var pet = {
    feed: 0,
    play: 0,
    groom: 0,
    active: false
}

var player = {
    name: "entered on sign-in screen",

    score: 0

   

}






































var names = ["Lorenzo", "Roxy", "Opal", "Vincent", "Joel", "Karlyn", "Dorie", "Mollie", "Gem", "Britt", "Emilia", "Hillary","Freddy", "Anastacia", "Shaunda", "Velda", "Selene", "Heath", "Bradley", "Torrie", "Christian", "Sachiko", "Jarrod", "Loree", "Bernice", "Georgianne", "Shon", "Hershel", "Tiesha", "Miles", "Karmen", "Kai", "Lue", "Cora", "Jessia", "Lavina", "Alex", "Eun", "Edith", "Meda", "Alysha", "Fidela", "Tori", "Malik", "Xavier", "Tad", "Blanch", "Loma", "Terisa", "Annice", "Lorna", "Mittie", "Cara", "Daisey", "Beula", "Mariann", "Treva", "Gilma", "Dee", "Ophelia", "Sherril", "Verlene", "Carter", "Lynnette", "Suellen", "Alanna", "Shirleen", "Shiela", "Edda", "Hae", "Maggie", "Katharyn", "Chery", "Augustina", "Blake", "Waylon", "Kam", "Trudie", "Ernestina", "Tyra", "Yukiko", "Anh", "Latashia", "Wilhelmina", "Derick", "Yolanda", "Lakesha", "Janessa", "Cristie", "Marilyn", "Ewa", "Geraldo", "Jonah", "Norene", "Max", "Shin", "Ervin", "Thelma", "Rhett", "Hiram"]


//generate dog on click
var petContainer = document.getElementById("pet");

function generateDog() {
    axios.get("https://dog.ceo/api/breeds/image/random").then(function(data) {
        petContainer.innerHTML = `<img src="${data.data.message}" style="height: auto; width: 390px">`;    
    });
    pet.active = true;
    generateName();
    startingStatus();
    statusBar();
}

//generate cat on click
function generateCat() {
    axios.get("https://aws.random.cat/meow").then(function(data) {
        petContainer.innerHTML = `<img src="${data.data.file}" style="height: auto; width: 390px">`;    
    });
    pet.active = true;
    generateName();
    startingStatus();
    statusBar();
}

//generate random name
var petNameContainer = document.getElementById("name");
function generateName() {
    var petName = names[Math.floor(Math.random() * names.length)];
    petNameContainer.innerHTML = petName;
}

//generate starting scores for each status of pet
function startingStatus() {
    pet.feed = Math.floor(Math.random() * (10));
    pet.groom = Math.floor(Math.random() * (10));
    pet.play = Math.floor(Math.random() * (10));
}

//set the status bar
function statusBar() {
    var status = document.getElementById("statusBar");
    var total = pet.feed + pet.groom + pet.play;
    var percentage = (total/30) * 100;
    status.style.height = (`${percentage}%`);
    if (total === 30) {
        pet.active = false;
        petContainer.innerHTML = `<h2 class="montserrat text-center mt-5" style="color: #FC4A1A;">Great Job!</h2> <br/> <h2 class="shrikhand text-center">+ 100</h2> <br/> <h2 class="montserrat text-center" style="color: #FC4A1A;">Choose another Pet</h2>`;
        player.score += 100;
        userScore.innerHTML = player.score;
    }
}

//set userName and score on Game Page
var userName = document.getElementById("gameName");
var userScore = document.getElementById("gameScore");

function setUserAndScore() {
    userName.innerHTML = player.name;
    userScore.innerHTML = player.score;
}

setUserAndScore();

//increment player score when feed/groom/play buttons are clicked, won't increment if pet care is completed or no pet selected
//the flag of pet.active boolean in the pet object is what prevents that behavior
function incrementScore(care) {
    if (pet.active === true) {
        if (pet[care] < 10) {
            pet[care] ++;
            player.score ++;
            userScore.innerHTML = player.score;
        } else if (pet[care] >= 10) {
            pet[care] --;
            player.score --;
            userScore.innerHTML = player.score;
        }
        statusBar();
    } else {
        return;
    }
}

//countdown timer (found this online, made it work for our game)
var display = document.getElementById("timer");

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;

        if (--timer == 0) {
            gameEnd();
            clearInterval();
        }
    }, 1000);
}

window.onload = function () {
    var threeMinutes = 60 * 3;
    startTimer(threeMinutes);
};

function gameEnd() {
    console.log(player.score);
    console.log(player.name);
    window.location = "win-screen.html";
    //store userdata into firebase
    //go to end screen
}

//Sign in

 function userName() {
    var userName = document.getElementById("playerName").value;
    console.log(userName);
    
    

    }




