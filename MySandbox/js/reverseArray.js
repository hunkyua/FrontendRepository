function reverseArray(mas) {
var result = [];
for (var i = mas.length-1; i >= 0; i--) {
result.push(mas[i]);
}
return result;
}

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

function reverseArrayInPlace(arrayValue) {
for (var i = 0; i < arrayValue.length/2; i++) {
var temp = arrayValue[i];
arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
arrayValue[arrayValue.length - 1 - i] = temp;
}
}






function range(start, end, step) {
var mas = [];
var step = step;
 if (step == undefined) {
 step = 1;
 }
 if (step < 0) {
 step = -step
 }
	if (start > end) {
		for (var i = start; i >= end; i -= step) {
			mas.push(i);
		}
	}
	if (start < end) {
		for (var i = start; i <= end; i += step) {
			mas.push(i);
		}
	}	
	console.log(mas);
	return mas;
}

function sum(mas) {
	var sum = 0;
		for (var i = 0; i < mas.length; i++) {
		sum += mas[i];
		}
	return sum;
}

//console.log(sum(range(1,10, 3)));





//one();

function one() {
var count = 7;
var stroka = '#';
var result = stroka;

for (var i = 0; i < count; i++) {
console.log(result);
result = result+ stroka;
}
}