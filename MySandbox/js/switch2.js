var valentin = {
	name: "Valentin",
	age: 25,
	city: "Kiev",
	sex: "male"
};
console.log(valentin.age);

var setAge = function(age) {
this.age = age;
};

var getAge = function() {
	return this.age;
};

valentin.setAge = setAge;
valentin.getAge = getAge;

valentin.setAge(26);
console.log(valentin.getAge());