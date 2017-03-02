function a (count) {
	return function (number) {
	console.log(number * count);
	};
}
var b = a(3);
b(3);