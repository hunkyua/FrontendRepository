function cheeseDesk(length, height) {
	var str = "#";
	for(var i = 0; i < height; i++) {
		for(var j = 1; j < length - 1; j += 2) {
			str += " #";
		}
		console.log(str);
		if (i % 2 == 0) {
		str = " #"
		} else {
		str = "#"
		}
		
		
	}
}
cheeseDesk(9,9);