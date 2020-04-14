
document.querySelector('#sumbttn').addEventListener('click', function(event){

		let n = document.querySelector('#input').value;
		let total = 0;

		for(var i = 0; i <= n; i++){
			total +=  i;
		}

		console.log(total);
		return total;

})



document.querySelector('#productbttn').addEventListener('click', function(event){
		
		let n = document.querySelector('#input').value;
		let total = 1;

		for(var i = 1; i <= n; i++){
			total *=  i;
		}
		
		console.log(total)
		return total;
})
