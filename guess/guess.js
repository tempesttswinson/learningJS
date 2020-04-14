

// . Write a guessing game where the user has to guess a secret number. After every
// guess the program tells the user whether their number was too large or too small.
// At the end the number of tries needed should be printed. It counts only as one try
// if they input the same number multiple times consecutively.

function secretNumber(){
	var secretNum = Math.floor(Math.random()*10);
}

document.querySelector("#submitBtn").addEventListener('click', function(event){
	
	let userGuess = document.querySelector('#userInput').value;
	var numOfGuesses = 0;
	
	console.log(secretNum);
	console.log(userGuess);

	if(userGuess > secretNum){
		console.log("You're number is too large")
		numOfGuesses ++;
	
	}else if(userGuess < secretNum){
		console.log("You're number is too small")
		numOfGuesses ++;
	}else{
		console.log("You guessed correctly!")
		console.log("It took you " +numOfGuesses+ " of guesses!")
		secretNumber();
	}
			

})