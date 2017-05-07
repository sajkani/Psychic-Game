var computerChoices = [ "a", "b" , "c" ];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses =0;

document.onkeyup = function(event) {

	var userGuess = event.key;

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	if ( userGuess === computerGuess ){
		wins++;
	}
	else if( userGuess != computerGuess ) {
		losses++;
	}

	var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>";

    document.querySelector("#game").innerHTML = html;

}
