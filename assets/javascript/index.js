var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("Hello")


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

var directionsText = document.getElementById("direction-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses");
var guessedLettersText = document.getElementById("guesses-left");


document.onkeyup = function (event) {
    console.log("button-clicked")
    var userGuess = event.key;

    guessedLetters.push(userGuess);

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess === computerGuess)) {

        if ((userGuess === computerGuess)) {
            wins++;
            guessesLeft = 8;
        }

        else {
            guesses--;
        }

        if (guesses === 0) {
            losses++;
            guessesLeft = 8;
        }



        directionsText.textContent = "";

        userChoiceText.textContent = "You guess: " + userGuess;
        computerChoiceText.textContent = "The Computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessedLetters.textContent = "Your guesses so far: " + guessedLetters;
    }


};




