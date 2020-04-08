$(document).ready(function(){

	$('body').on('click', function(){

		$('body').append('<a>Google</a>');
		$('a').attr('href', 'https://www.google.com');
	})
})