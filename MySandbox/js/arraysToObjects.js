var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

var massiv = Array();

for (var i = 0; i < 10; i++) {
	massiv[i] = new Person("Vasya", 16);
	console.log("____" + i +"____");
	console.log("| " + massiv[i].name + " |");
	console.log("| " + massiv[i].age + " |");
	console.log("------");
};

