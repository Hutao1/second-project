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
$(".n-top img").click(function(){
	location.href = "http://127.0.0.1/php/secondtest/second-project/html/home.html";
})
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
$(".shopcar").click(function(){
	checklogin();
})