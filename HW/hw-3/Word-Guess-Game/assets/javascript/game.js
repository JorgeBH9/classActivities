// Creates an array that lists the alphabet.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins and loses. They start at 0.
var wins = 0;
var losses = 0;

//This is the creation of an empty array to store the letters that the user chose.
var userGuessSelectedLetters = [];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's choice.
    var computerLetterGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This checks if the computerLetterGuess is equal to the userGuess and adds to the wins variable by 1
    // and keeps the count.
    if (computerLetterGuess === userGuess) {

        wins++;
    }
    else {

        losses++;
    }

    // This is only pushing the firstvalue of the key that the user pressed.
    if (userGuessSelectedLetters.length === 0) {

        userGuessSelectedLetters.unshift(userGuess)

    }

    // This is pushing the value of the key that the user pressed.
    if (userGuessSelectedLetters.length <= 9) {
        userGuessSelectedLetters.push(userGuess);
    }


    // Creating a variable to hold our new HTML. Our HTML now keeps track of wins & losses.
    var html =

        "<p>You chose: " + userGuess + "</p>" +
        "<p>User letter selections: " + userGuessSelectedLetters + "</p>" +
        "<p>The computer chose: " + computerLetterGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#displayForpsychicgame").innerHTML = html;

    //This code will reset the entire game
    if (losses === 9) {

        alert("The game is over. Thanks for playing!")
        location.reload();

    }
}