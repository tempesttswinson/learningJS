
var pizzaToppings = ["pepporoni", "bacon", "cheese"];

function pizza(){

	description =  "A delicious pizza with " + pizzaToppings[0] + " and " +pizzaToppings[1]+ " and " +pizzaToppings[2] + ".";

	console.log(description);
	return description;
}

pizza();