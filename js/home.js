var num = 0;
var timer = setInterval(autoPlay,5000);
$(".btnleft,.btnright").click(function(){
	autoPlay();
})
$(".pleft").click(function(){
	num = -1;
	autoPlay();
})
$(".pright").click(function(){
	num = 0;
	autoPlay();
})
function autoPlay(){
	num++;
	if(num == 2){
		num = 0;
	}
	$(".num p").eq(num).addClass("shadow").siblings().removeClass("shadow");
	if(num){
		$("#autoplay img").eq(1).animate({opacity:1},1000);
		$("#autoplay img").eq(0).animate({opacity:0},1000);
	}else{
		$("#autoplay img").eq(1).animate({opacity:0},1000);
		$("#autoplay img").eq(0).animate({opacity:1},1000);
	}
}
$(".girldress").click(function(){
	location.href = "http://127.0.0.1/php/secondtest/second-project/html/girldress.html";
})






