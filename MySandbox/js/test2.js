var tryMethod = {
	one: "aaaa",
	two: "bbbb",
	"lox": "lowara"
};

var journal = [
  {events: ["работа", "тронул дерево", "пицца", "пробежка", "телевизор"],
   squirrel: false},
  {events: ["работа", "мороженое", "цветная капуста", "лазанья", "тронул дерево", "почистил зубы"],
   squirrel: false},
  {events: ["выходной", "велик", "перерыв", "арахис", "пивасик"],
   squirrel: true},
  /* и так далее... */
];
console.log(journal[2].squirrel);
console.log(tryMethod.one);
console.log(tryMethod.two);
console.log(tryMethod.lox);