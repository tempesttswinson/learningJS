$(document).ready(function(){

	$('input').keyup(function(){

		var userInput = $('input').val();
		alert(userInput);
		$('div').append(userInput);
	})
})