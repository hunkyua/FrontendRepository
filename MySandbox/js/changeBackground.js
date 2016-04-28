

$(document).ready(function() {
	$(".putMe").click(function(){
	$(this).addClass("hide");
    $(".div1").animate({left: '425px'});
	$(".div2").animate({left: '525px'});
	$(".div3").animate({left: '625px'});
	$(".div4").animate({left: '725px'});
	$(".div5").animate({left: '825px'});
	
	$(".hide").click(function(){
	$(this).removeClass("hide");
	$(".div1").animate({left: '425px'});
	$(".div2").animate({left: '425px'});
	$(".div3").animate({left: '425px'});
	$(".div4").animate({left: '425px'});
	$(".div5").animate({left: '425px'});
	});
	});
});



$(document).ready(function(){
    $('.topmenu ul li').hover(
        function() {
            $(this).addClass("active");
            $(this).find('ul').stop(true, true); // останавливаем всю текущую анимацию
            $(this).find('ul').slideDown();
        },
        function() {
            $(this).removeClass("active");        
            $(this).find('ul').slideUp('fast');
        }
    );
});