// Creates an array that lists out all of the letters the computer can choose.
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"];

// Creating variables to hold the number of wins and losses, starting with 0.
var wins = 0;
var losses = 0;
var guesses = 10;
var wrongGuesses = [];
    
//Here I want to create a function to make the computer select a random letter.

function computerGuess () {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    };

var cpuLetter = computerGuess();

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
    var userGuess = event.key;

    // This logic determines the outcome of the game (win/loss), and keeps score.
    if (userGuess === cpuLetter) { wins++; guesses=10; wrongGuesses = []; cpuLetter = computerGuess(); }
        
    else if (guesses <= 1) { losses++; guesses=10; wrongGuesses = []; cpuLetter = computerGuess(); }
        
    else {if (wrongGuesses.indexOf(userGuess) === -1) {guesses--; wrongGuesses.push(userGuess); } };

    // This variable will hold our new HTML showing the score. 
    var html =
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guesses + "</p>" +
    "<p>Your guesses so far: " + wrongGuesses + "</p>";
    /*"<p>CPU Pick: " + cpuLetter + "</p>";*/

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
    };