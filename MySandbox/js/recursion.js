console.log(isEven(99));

function isEven(num) {
	if (num >= 0) {
		if (num == 0) {
			return true;
		} else if (num == 1) {
			return false;
		} else {
			return isEven(num - 2);
		}
	} if (num < 0 ) {
		if (num == 0) {
			return true;
		} else if (num == 1) {
			return false;
		} else {
			return isEven(num + 2);
		}
	}
};

