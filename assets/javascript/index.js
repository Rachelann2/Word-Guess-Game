var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



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

    var userGuess = event.key;

    guessedLetters.push(userGuess);

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess === computerGuess)) {
        wins++;

    }

    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessedLetters = [];
    }




    directionsText.textContent = "";

    userChoiceText.textContent = "You guess: " + userGuess;
    computerChoiceText.textContent = "The Computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessedLettersText.textContent = "Your guesses so far: " + guessedLetters;

    console.log(userGuess, userChoiceText)
};







