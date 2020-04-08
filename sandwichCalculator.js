
function sandwichCalculator(slicesOfBread, slicesOfCheese){
	sandwiches = Math.floor(slicesOfBread /2);

	if((slicesOfCheese >1) && (slicesOfBread >= 2) && (slicesOfCheese
		 < sandwiches)){
		sandwiches = slicesOfCheese;
		console.log(sandwiches);
		return sandwiches;
	}else if ((slicesOfCheese >= sandwiches) && (slicesOfBread >= 2 )){
		console.log(sandwiches);
		return sandwiches;
	}else 
	console.log("Can not make any sandwiches!");
	return 0;
}

sandwichCalculator(53223542,33243);