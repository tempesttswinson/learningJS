
let currentYear = 2020;

for(var i = 1; i<=20; i++){

	if(((currentYear + i) %4) == 0){
		let leapYear = currentYear +i;
		console.log(leapYear);
	}
}

