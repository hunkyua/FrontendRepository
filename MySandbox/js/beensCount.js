console.log(beensCount("SosiskasysS", "s"));

function beensCount(str, findChar) {
var count = 0;
for (var i = 0; i < str.length; i++) {
	if (str.charAt(i) == findChar.toLowerCase() || str.charAt(i) == findChar.toUpperCase() ) {
		count++;
	}
};
return count;	
};