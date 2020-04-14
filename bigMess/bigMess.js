
$(document).ready(function(){

	let randomValue = function (){
		 return Math.random()*500;
	}

	$('body *').each(function(){

		$(this).css(
		{
			"position" : "absolute",
			"top": randomValue() ,
			"left": randomValue()
		})
	})
})

