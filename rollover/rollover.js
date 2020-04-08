$(document).ready(function (){

	$('div').hover(function(){

		$('div').append('over');

	}, function(){

		$('div').append('out');

	})
})