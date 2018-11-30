//firebase
var database = firebase.database();
var highScoreList = database.ref('highScores/');

//animal object
var pet = {
    feed: 0,
    play: 0,
    groom: 0,
    active: false
}

var player = {
    score: 0
}

//sounds
var catSound = document.getElementById("catSound");
var dogSound = document.getElementById("dogSound");
var rightSound = document.getElementById("rightSound");
var wrongSound = document.getElementById("wrongSound");
var successSound = document.getElementById("successSound");

//set userName and score on Game Page
var userScore = document.getElementById("gameScore");

function setUserAndScore() {
    var userNameDisplay = document.getElementById("gameName");
    var userName = localStorage.getItem("name")
    var score = localStorage.getItem("score")
    userNameDisplay.innerHTML = userName;
    userScore.innerHTML = score;
}

setUserAndScore();

//array of potential pet names
var names = ["Lorenzo", "Roxy", "Opal", "Vincent", "Joel", "Karlyn", "Dorie", "Mollie", "Gem", "Britt", "Emilia", "Hillary","Freddy", "Anastacia", "Shaunda", "Velda", "Selene", "Heath", "Bradley", "Torrie", "Christian", "Sachiko", "Jarrod", "Loree", "Bernice", "Georgianne", "Shon", "Hershel", "Tiesha", "Miles", "Karmen", "Kai", "Lue", "Cora", "Jessia", "Lavina", "Alex", "Eun", "Edith", "Meda", "Alysha", "Fidela", "Tori", "Malik", "Xavier", "Tad", "Blanch", "Loma", "Terisa", "Annice", "Lorna", "Mittie", "Cara", "Daisey", "Beula", "Mariann", "Treva", "Gilma", "Dee", "Ophelia", "Sherril", "Verlene", "Carter", "Lynnette", "Suellen", "Alanna", "Shirleen", "Shiela", "Edda", "Hae", "Maggie", "Katharyn", "Chery", "Augustina", "Blake", "Waylon", "Kam", "Trudie", "Ernestina", "Tyra", "Yukiko", "Anh", "Latashia", "Wilhelmina", "Derick", "Yolanda", "Lakesha", "Janessa", "Cristie", "Marilyn", "Ewa", "Geraldo", "Jonah", "Norene", "Max", "Shin", "Ervin", "Thelma", "Rhett", "Hiram", "Peggy", "Mattie", "Araceli", "Sadye", "Tesha", "Bettyann", "Marivel", "Sidney", "Isabella", "Seema", "Erminia", "Wilfred", "Derick", "Lamonica", "Sherly", "Iliana", "Harriett", "Valeria", "Clay", "Marlo", "Dot", "Rema", "Rossie", "Royce", "Isaiah", "Daryl", "Danette", "Eugene", "Sharda", "Michaela", "Mandy", "Wiley", "Jeanne", "Latoya", "Dovie", "Hui", "Amada", "Kristina", "Juliana", "Denese", "Amiee", "Chas", "Sherrill", "Devon", "Marisela", "Dione", "Nadia", "Vanna", "Frieda", "Kyra", "Boots", "Marshmallow", "Whiskers", "Kya", "Rocky", "Minerva", "Luna", "Frances", "Sadie", "Fang", "Frodo", "Albus", "SnickerDoodle", "Sugar", "Fuzzy-Lumpkins", "Mr. MooMoo", "Alcatraz", "Rhonda", "Norbert", "Snitch", "Mittens", "Peaches", "Spot", "Dot", "Dingo", "Buster", "Ringo", "Boo", "Fluffy", "Hedwig", "Andromeda", "Sirius", "Grim", "Algernon", "Pig", "Floof", "Kitty", "Pup", "Jazzy", "Tinsel", "Monkey", "Mario", "Spike", "Cookie", "Buddy", "Alice", "Mithrandir", "Tom", "Jerry", "Mouse", "Finn", "Wolfy", "Bailey", "Steven", "Garnet", "Pearl", "Amethyst", "Pink", "Blue", "Salty", "Pepper", "Penny", "Copper", "Old-Dan", "Little-Ann", "Yeller"]


//generate dog on click
var petContainer = document.getElementById("pet");

function generateDog() {
    axios.get("https://dog.ceo/api/breeds/image/random").then(function(data) {
        petContainer.innerHTML = `<img class="rounded" src="${data.data.message}" style="height: auto; width: 390px;">`;    
    });
    pet.active = true;
    generateName();
    startingStatus();
    statusBar();
    dogSound.play();
}

//generate cat on click
function generateCat() {
    axios.get("https://aws.random.cat/meow").then(function(data) {
        petContainer.innerHTML = `<img class="rounded" src="${data.data.file}" style="height: auto; width: 390px;">`;    
    });
    pet.active = true;
    generateName();
    startingStatus();
    statusBar();
    catSound.play();
}

//generate random name
var petNameContainer = document.getElementById("name");
function generateName() {
    var petName = names[Math.floor(Math.random() * names.length)];
    petNameContainer.innerHTML = petName;
}

//generate starting scores for each status of pet
function startingStatus() {
    pet.feed = Math.floor(Math.random() * (5));
    pet.groom = Math.floor(Math.random() * (5));
    pet.play = Math.floor(Math.random() * (5));
}

//set the status bar
function statusBar() {
    var status = document.getElementById("statusBar");
    var total = pet.feed + pet.groom + pet.play;
    var percentage = (total/15) * 100;
    status.style.height = (`${percentage}%`);
    if (total === 15) {
        pet.active = false;
        petContainer.innerHTML = `<h2 class="montserrat text-center mt-5" style="color: #FC4A1A;">Great Job!</h2> <br/> <h2         class="shrikhand text-center">+ 100</h2> <br/> <h2 class="montserrat text-center" style="color: #FC4A1A;">Choose        another Pet</h2>`;
        petNameContainer.innerHTML = "  ";
        player.score += 100;
        userScore.innerHTML = player.score;
        successSound.play();
    }
}

//increment player score when feed/groom/play buttons are clicked, won't increment if pet care is completed or no pet selected
//the flag of pet.active boolean in the pet object is what prevents that behavior
function incrementScore(care) {
    if (pet.active === true) {
        if (pet[care] < 5) {
            pet[care] ++;
            player.score ++;
            userScore.innerHTML = player.score;
            rightSound.play();
        } else if (pet[care] >= 5) {
            pet[care] --;
            player.score --;
            userScore.innerHTML = player.score;
            wrongSound.play();
        }
        statusBar();
    } else {
        return;
    }
}

//countdown timer (found this online, made it work for our game)
function startTimer(duration) {
    var display = document.getElementById("timer");
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

//starts a one minute timer when this page loads
window.onload = function () {
    var oneMinute = 60;
    startTimer(oneMinute);
};

//store userdata into firebase
function storeInFirebase () {
    var userName = localStorage.getItem("name")
    var score = localStorage.getItem("score")
    var newUserData = highScoreList.push();
    newUserData.set( {
        name: userName,
        finalScore: score 
    });
}


function gameEnd() {
    localStorage.setItem("score",`${player.score}`)
    window.location = "win-screen.html";
    //store userdata into firebase
    storeInFirebase();
}