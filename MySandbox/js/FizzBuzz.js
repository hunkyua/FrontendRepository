triangle();

function triangle() {
for (var i = 0; i < 100; i++) {
console.log(i);
if (i > 0) {
if (i % 3 == 0 && i % 5 == 0) {
console.log("FizzBuzz");
}
//if (i % 5 == 0) {
//console.log("Buzz");
//}
}
}
}

