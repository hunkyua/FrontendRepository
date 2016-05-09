/*$(document).ready(function() {
	alert('hello');
});

jQuery(document).ready(function($) {
	
});*/

// var lol = {

// 	firstName: "Val",
// 	lastName: "Opana",
// 	age : 25,
// 	func : function() {
// 		alert(this.firstName + " " + this.lastName + " " + this.age);
// 	}
// };

// lol.func();

/*function Tax(income, dependents) {
	this.income = income;
	this.dependents = dependents;

	var mafiaTaxDeduction = 300;

		this.doTaxes = function() {
			return income * 0.05 - dependents*500 - mafiaTaxDeduction;
		}
}

var t1 = new Tax (5000, 3);
var t2 = new Tax (5000, 4);

console.log("Your tax is : " + t1.doTaxes());
console.log("Your mafia.. is : " + t1.mafiaTaxDeduction);*/
/*var masiv = [1, 2, 3];

function alr(count) {
	console.log("How much : " + count);
}

(function trySomething(mas, alerr) {
	for (var i = 0; i < mas.length; i++){
		alerr(mas[i]);
	}
})(masiv, alr);
*/
// trySomething(masiv, alr);

function prepareTaxes (studentTax) {
	return function(income) {
		return income - studentTax;
	};
};

var one = prepareTaxes(100);
var two = one(400);
console.log(two);