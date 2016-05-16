
// function Animal(name, age) {
// 		this.name = name;
// 		this.age = age;
// };
// Animal.prototype.lol = function() {
// console.log("Lololololo");
// };

// function Dog (name, age) {
// 	this.name = name;
// 	this.age = age;
// };
// Dog.prototype = new Animal();
// Dog.prototype.bark = function() {
// console.log("Wooooof :)");
// };



// var bobby = new Dog("Bobby", 2);
// var jecky = new Dog("Jecky", 5); 
// bobby.bark();
// jecky.bark();



// bobby.lol();ww.win2.cn/g10

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var myLang in languages) {
    console.log(languages[myLang]);
};
var x = 5;
for (var i=0; i<5; i++) { x=x+3 };
console.log(x);