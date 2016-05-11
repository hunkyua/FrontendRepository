/*function myFunction(movie) {
	switch(movie) {
		case "Toy Story 2": 
		document.getElementById("first").value = "lol";	
		console.log("Great story. Mean prospector.");	
		break;

		case "Finding Nemo" :
		console.log("Cool animation, and funny turtles.");
		break;

		case "The Lion King":
		console.log("Great songs.");
		break;

		default: 
		console.log("I don't know!");
	}
}

myFunction("Toy Story 2");
*/
var bob = {
name: "Bob",
age: 15
}

var sara = {
name: "Sara",
age: 17
}

function setName(name){
this.name = name;
}
bob.setName = setName;
bob.setName("Bob1");
sara.setName = setName;
sara.setName("Sara1");

console.log(bob);
console.log(sara);

var lox = new Object();
lox.name = "lox";
lox.setName = setName;
lox.setName("Lowara");