var runner = 0;

function flicker(count, fadeIn, delay, fadeOut) {
	$(".div" + count).fadeIn(fadeIn).delay(delay).fadeOut(fadeOut);
		$(".div" + count).click(function() {
			$(".div" + count).css("background-color","red");
		});
		$(".div" + count).css("background-color","orange");
};

function random() {
	var value = Math.ceil((Math.random() * 9));
	console.log(value);
	return value;
};

function run() {
	var randomazer = random();
	var fadeIn = 200;
	var delay = 1000;
	var fadeOut = 400;
	var timeOutOne = 1600;
	var timeOutTwo = 1500;
	var score = 0;

		setTimeout(function run() {
			$(".div" + randomazer).click(function() {
				score += 1;
				$(".score").html("Score: " + score);
			});
			if (score > 10) {
			fadeIn = 100;
			delay = 500;
			fadeOut = 200;
			timeOutOne = 1200;
			timeOutTwo = 1000;
			} else if (score > 50){
			fadeIn = 100;
			delay = 300;
			fadeOut = 200;
			timeOutOne = 800;
			timeOutTwo = 600;
			} else if (score > 100){
			fadeIn = 500;
			delay = 200;
			fadeOut = 100;
			timeOutOne = 400;
			timeOutTwo = 200;
			};
			flicker(randomazer, fadeIn, delay, fadeOut);
			setTimeout(run, timeOutOne);
			randomazer = random();
		}, timeOutTwo);
};

$(".start").click(function() {
	if (runner === 0) {
		run();
		runner++;
	} else {
		alert("Game is already start");
	}
});

$(".stop").click(function() {
	 location.reload();
});


$(".showAll").click(function() {
		$("div").show("slow");
		$(".showAll").hide();
		$(".hideAll").show();
});

$(".hideAll").click(function() {
		$(".div1").hide();
		$(".div2").hide();
		$(".div3").hide();
		$(".div4").hide();
		$(".div5").hide();
		$(".div6").hide();
		$(".div7").hide();
		$(".div8").hide();
		$(".div9").hide();
		$(".hideAll").hide();
		$(".showAll").show();
});