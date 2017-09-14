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
	location.href = "../html/home.html";
})
$(".header a,.shoplist li").hover(function(){
	$(this).css("color","#9A0F12");
},function(){
	$(this).css("color","");
})

$(".plogin").click(function(){
	location.href = "../html/login.html";
})
$(".pregister").click(function(){
	location.href = "../html/register.html";
})
$(".n-top input").focus(function(){
	$(this).attr("placeholder","请输入您想寻找的商品名称");
})
$(".shopcar").click(function(){
	checklogin();
})
function getNum(){
	if(getCookie("login")){
		$.ajax({
			type:"get",
			url:"../php/getshop.php",
			data:"method=get&tel="+getCookie("login").tel,
			success:function(msg){
				if(msg == ""){
					$(".shopnum").html("0");
				}else{
					var arr = msg.split(";");
					if(arr[1] == ""){
						$(".shopnum").html(arr[0].split("_")[1].split("=")[1]);
					}else{
						var getnumber = 0;
						for(var i in arr){
							getnumber += parseInt(arr[i].split("_")[1].split("=")[1]);
						}
						$(".shopnum").html(getnumber);
					}
					
				}
			}
		})
	}else{
		$(".shopnum").html("0");
	}
}
function logined(){
	if(getCookie("login")){
		$(".plogin").remove();
		$(".pregister").remove();
		var $li = $(`<li style="margin:0 20px">${getCookie("login").tel}</li>`);
		$(".h-right").prepend($li);
	}
}
