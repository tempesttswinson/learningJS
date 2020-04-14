let n = prompt('pick a number');

function sum (num){
	
	let total = 0;

	for(var i = 0; i <= n; i++){
		if((i % 3 == 0)||( i % 5 == 0)){
		total +=  i; // total = total + i;
		}
	}

	return total; 

}

console.log(sum(n));