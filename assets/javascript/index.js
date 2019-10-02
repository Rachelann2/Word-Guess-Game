var genCharArray = computerChoices
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
genCharArray('a', 'z');

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesleft = 0;


var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var guessesleftText = document.getElementById("guessesleft-text");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if ((userGuess === computerGuess)) {
        if ((userGuess === computerGuess)) {
            wins++;
        }
        else {
            losses++;
        }

        directionsText.textContent = "";

        userChoiceText.textContent = "You guess: " + userGuess;
        computerChoiceText.textContent = "The Computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesText.textContent = "Your guesses: " + guesses;
        guessesleftText.textContent = "Guesses left: " + guessesleft;
    }
};




