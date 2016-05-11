var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	};
};

/*Create a search function
then call it passing "Jones"*/
 var search = function(lastName) {
     var contactsLength = contacts.length;
     for (var i = 0; i < contactsLength; i++) {
		if (contacts[i].lastName === lastName) {
		printPerson(contacts[i]);
	    };
	};
 };


var add = function(firstName, lastName, email, phoneNumber) {
   this.firstName = firstName; 
   this.lastName = lastName; 
   this.email = email; 
   this.phoneNumber = phoneNumber;
   contacts[contacts.length] = {
    firstName: firstName,
    lastName : lastName,
    phoneNumber : phoneNumber,
    email : email
    };
};

add("Deb", "Lovas", "dev.lovas@gmail.com", "(560) 999-9999");
list();
