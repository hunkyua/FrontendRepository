var myObj = {
	 name1: "lolo",
	 phone1: "444"
};

myObj.name = "Anderson";
myObj.phone = "(333)-333-33-33";
myObj.myFunction = function() {
	console.log("Calling " + this.name + " at " + this.phone);
	console.log("Calling " + this.name1 + " at " + this.phone1);
};

myObj.myFunction();