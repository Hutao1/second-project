$(".na").load("http://127.0.0.1/php/secondtest/second-project/html/home.html .nav",function(){
	$(".n-top img").click(function(){
		location.href = "http://127.0.0.1/php/secondtest/second-project/html/home.html";
	})
});
$(".foot").load("http://127.0.0.1/php/secondtest/second-project/html/home.html .footer");
var str = location.href;
//http://127.0.0.1/php/secondtest/second-project/html/details.html?id=5
var id = parseInt(str.split("?")[1].split("=")[1]);
logined();
getNum();
$.ajax({
	type:"get",
	url:"http://127.0.0.1/php/secondtest/second-project/girldress_json/girldress.json",
	success:function(msg){
		var name = "",price="",smallimg="",middleimg="",bigimg="";
		for(var i in msg.list){
			for(var j in msg.list[i]){
				if(msg.list[i][j] == id){
					name = msg.list[i].name;
					price=msg.list[i].price;
					smallimg=msg.list[i].smallimg;
					middleimg=msg.list[i].middleimg;
					bigimg=msg.list[i].bigimg;
				}
			}
		}
		$(".data-left img").attr("src","http://127.0.0.1/php/secondtest/second-project/girlistimg/"+smallimg);
		$(".imgleft img").attr("src","http://127.0.0.1/php/secondtest/second-project/girlistimg/"+middleimg);
		$(".imgbig img").attr("src","http://127.0.0.1/php/secondtest/second-project/girlistimg/"+bigimg);
		$(".name").html(name);
		$(".data-price").html(price);
	}
});
$(".data-center").mouseover(function(e){
	$(".cover").css("display","block");
	$(".imgbig").css("display","block");
	var e = e || event;
	var x = $(this).offset().left;
	var y = $(this).offset().top;
	$(document).mousemove(function(e){
		var e = e || event;
		var disx = e.pageX - x - $(".cover").width()/2;
		var disy = e.pageY - y - $(".cover").height()/2;
		disx = Math.max(0,(Math.min(disx,$(".data-center").width()-$(".cover").width())));
		disy = Math.max(0,(Math.min(disy,$(".data-center").height()-$(".cover").height())));
		bigx = $(".imgbig img").width()/$(".imgleft img").width()*disx;
		bigy = $(".imgbig img").height()/$(".imgleft img").height()*disy;
		$(".cover").css({
			"left":disx,
			"top":disy
		});
		$(".imgbig img").css({
			"left":-bigx,
			"top":-bigy
		})
	})
}).mouseout(function(){
	$(".cover").css("display","none");
	$(".imgbig").css("display","none");
	$(document).mousemove = null;
})
$(".add").click(function(){
	var num = parseInt($(".goodsnum").html())
	$(".goodsnum").html(++num);
})
$(".sub").click(function(){
	var num = parseInt($(".goodsnum").html())
	if(num > 1){
		$(".goodsnum").html(--num);
	}
})
$(".buy").click(function(){
	if(!getCookie("login")){
		location.href = "http://127.0.0.1/php/secondtest/second-project/html/login.html";
		return;
	}else{
		$.ajax({
			type:"get",
			url:"http://127.0.0.1/php/secondtest/second-project/php/getshop.php",
			data:"method=get&tel="+getCookie("login").tel,
			success:function(msg){
				var one = "id="+id+"_num="+$(".goodsnum").html();
				var str = msg;
				var arr = msg.split(";");
				var flag = false;
				var data = "";
				for(var i = 0; i < arr.length;i++){
					if(parseInt(arr[i].split("_")[0].split("=")[1]) == id){
						var strnum = parseInt(arr[i].split("_")[1].split("=")[1])+parseInt($(".goodsnum").html());
						var str2 = "num="+strnum;
						var str3 = "num="+arr[i].split("_")[1].split("=")[1];
						var brr = arr[i].replace(str3,str2);
						str = str.replace(arr[i],brr);
						flag = true;
					}
				}
				if(!flag){
					if(str == ""){
						str+=one;
					}else{
						str+=";"+one;
					}
				}
				$.ajax({
					type:"get",
					url:"http://127.0.0.1/php/secondtest/second-project/php/getshop.php",
					data:"method=set&tel="+getCookie("login").tel+"&ushop="+str,
					success:function(msg){
						getNum();
						alert("添加成功");
					}
				});
				
			}
		});
	}
})
