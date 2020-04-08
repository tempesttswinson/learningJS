
var letterArray = ["a", "b", "c", "d", "e", "f"] ;

const newLetters = letterArray.map(function capitalize(letter){

	return letter.toUpperCase();
	
})

console.log(newLetters);