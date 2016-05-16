var bob = {
	name: "Bob",
	age: 15
};

var prop = "name";

console.log(bob.name);
console.log(bob.age);
console.log("***************");
console.log(bob["name"]);
console.log(bob["age"]);
console.log("***************");

for (var prop in bob) {
	console.log(prop);
	console.log(bob[prop]);
	console.log("***************");
};