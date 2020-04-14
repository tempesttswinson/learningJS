
var pizzaToppings = ["pepporoni", "bacon", "cheese"];

function pizza(){

	var addToppings = pizzaToppings.join(' and ');
	return "A delicious pizza that has " addToppings;
}

console.log(pizza());