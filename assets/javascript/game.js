var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses =9;
var guessedLetters = [];
var lettertoGuess = null;

document.onkeyup = function(event) {

  var userGuess = event.key;

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

  }

  if ( userGuess === computerGuess ){
    wins++;
    reset();
  }
  else if( userGuess != computerGuess ) {
    guessesLeft--;
  }

  if ( guessesLeft === 0) {
    losses++;
    reset();
  }

  var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>"+
          "<p>Guesses Left:" + guessesLeft +"</p>"+
          "<p>Your Guesses So Far:" + guessedLetters +"</p>";

    document.querySelector("#game").innerHTML = html;

}
