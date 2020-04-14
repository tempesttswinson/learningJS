
document.querySelector("#submitBtn").addEventListener('click', function(event){
	
	let secretNum = Math.floor(Math.random()*10);
	let userGuess = document.querySelector('#userInput').value;
	let numOfGuesses = 0;
	
	if(userGuess > secretNum){
		console.log("You're number is too large")
		numOfGuesses ++;
		break;
	}else if(userGuess < secretNum){
		console.log("You're number is too small")
		numOfGuesses ++;
		break;

	}else{
		console.log("You guessed correctly!")
		console.log("It took you " +numOfGuesses+ " of guesses!")
	}

})