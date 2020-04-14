
let name = document.querySelector('#name');
let body = document.querySelector('body');

document.querySelector('#submit').addEventListener('click', function(event){

	if( name.value === "ALICE" ||  name.value ==="BOB"){
		var text = document.createElement('p');
		text.innerHTML = "Hello " + name.value;	
		body.appendChild(text);
		name.value = "";
	}else{
		var text = document.createElement('p');
		text.innerHTML = "You're not Bob or Alice! Good-bye!";	
		body.appendChild(text);
		name.value = "";
	}

})