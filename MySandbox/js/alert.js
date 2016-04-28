var admin;
var name = "Василий";
admin = name;
//alert(admin)
var message = "Hello bl4evec :)"
//alert("I - Java Script " + message);
// [1,2].forEach(alert)


function Person(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}

var p1 = new Person("Eduard", "Surovuy");
var p2 = new Person("Griwa", "Borodatuy");

console.log(p1);
console.log(p2);

Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
}

console.log(p1.getFullName());
console.log(p2.getFullName());

p1.getFullName = function() {
	return "ololo";
}

console.log(p1.getFullName());