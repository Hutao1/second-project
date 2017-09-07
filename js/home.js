		$(".h-left li:eq(0)").mouseover(function(){
			$(this).find(".shoplist").css("display","block");
		}).mouseout(function(){
			$(this).find(".shoplist").css("display","none");
		})
		/*$(".shoplist").mouseover(function(){
			$(this).css("display","block");
		}).mouseout(function(){
			$(this).css("display","none");
		})*/
		$(".header a,.shoplist li").hover(function(){
			$(this).css("color","#9A0F12");
		},function(){
			$(this).css("color","");
		})
	
	$(".h-right li:eq(0) a").click(function(){
		location.href = "http://127.0.0.1/php/secondtest/second-project/html/login.html";
	})
	$(".h-right li:eq(1) a").click(function(){
		location.href = "http://127.0.0.1/php/secondtest/second-project/html/register.html";
	})
	$(".h-right li:eq(2) a").click(function(){
		location.href = "http://127.0.0.1/php/secondtest/second-project/html/shopcar.html";
	})
	$(".n-top input").focus(function(){
		$(this).attr("placeholder","请输入您想寻找的商品名称");
	})
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
	$(".footer-b").load("lorepu.html .footer-bottom");






