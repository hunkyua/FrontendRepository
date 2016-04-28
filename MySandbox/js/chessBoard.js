chessBoard(8,8);

function chessBoard (height, width) {
var result = '#';
	for (var j = 1; j <= height; j++) {
		for (var i = 2; i <= width; i++) {
			if ( j % 2 == 0 ) {
				if (i % 2 == 0) {
				result += '#';
				}
				if (i % 2 == 1) {
				result += ' ';
				}
			}
			if ( j % 2 == 1 ) {
				if (i % 2 == 0) {
				result += ' ';
				}
				if (i % 2 == 1) {
				result += '#';
				}
			}
		}
		console.log(result);
		if (j % 2 == 0) {
		result = '#';
		} 
		if (j % 2 == 1)  {
		result = ' ';
		}
	}
}
