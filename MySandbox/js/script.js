$(document).ready(function(){
	$("p").click(function() {
	$(this).hide();
	});
});


var bla = function(lol) {
var res = lol;
return res;
};
//console.log(bla(5));

//alert('a','b','c'); //only 'a' will be showe
//console.log('a','b', 'c'); // all will be show

function lol (n) {
	var result = n;
	return function () {
		return result;
	};
};

var one = lol(1);
var two = lol(2);
//console.log(one());
//console.log(two());

function lol2 (n) {
	var result = n;
	return result;	
};

var one1 = lol(1);
var two1 = lol(2);
//console.log(one1());
//console.log(two1());

var my = function (){
	var n = 4;
	return n;
}
//console.log(my());

function freez(factor) {
	return function(number) {
		return factor * number;
	};
};
var myFreez = freez(2);
//console.log(myFreez(5));

function recursion(num1, num2) {
	if (num2 == 0) {
		return 1;
	}
	else {
	return num1 * recursion(num1, num2 - 1);
	
	}
};
//console.log(recursion(2,3));




