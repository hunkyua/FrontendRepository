var valentin = {
	name: "Valentin",
	age: 25,
	city: "Kiev",
	sex: "male"
};


var setAge = function(age) {
this.age = age;
};

var getAge = function() {
	return this.age;
};

function Person (name, age) {
	this.name = name;
	this.age = age;
};
var alex = new Person("Alex", 22);
console.log(alex);
console.log(alex.name);
console.log(alex.age);
valentin.setAge = setAge;
valentin.getAge = getAge;

valentin.setAge(26);
console.log(valentin.getAge());