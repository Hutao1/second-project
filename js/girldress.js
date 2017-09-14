$(".na").load("../html/home.html .nav",function(){
	$(".n-top img").click(function(){
		location.href = "../html/home.html";
	})
});
$(".foot").load("../html/home.html .footer");
logined();
getNum();
$(".left dd p:even").each(function(){
	if($(this).html().length >12){
		var str = $(this).html().substr(0,12);
		$(this).html(str+"...");
	}
})
$(".index-l,.index-r").mouseenter(function(){
	$(this).css("border-color","#f00");
}).mouseleave(function(){
	$(this).css("border-color","#666");
})
var index = 1;
$(".index-l").css("color","#cdcdcd").find("i").css("color","#cdcdcd");
$.ajax({
	type:"get",
	url:"../girldress_json/girldress.json",
	success:function(msg){
		var num = Math.ceil(msg.list.length/8);
		$("ul[class^=index] li:last-child").html("共"+num+"页");
		for(var i = 0; i < num ; i++){
			var $li = $("<li>"+(i+1)+"</li>");
			$("ul[class^=index] .index-r").before($li);
		}
		show(index,msg);
		$("ul[class^=index]").on("click","li",function(){
			if(Number($(this).html())){
				index = Number($(this).html());
				show(index,msg);
				if(index == 1){
					$(".index-l").css("color","#cdcdcd").find("i").css("color","#cdcdcd");
				}else{
					$(".index-l").css("color","#333").find("i").css("color","#f00");
				}
				if(index == num){
					$(".index-r").css("color","#cdcdcd").find("i").css("color","#cdcdcd");
				}else{
					$(".index-r").css("color","#333").find("i").css("color","#f00");
				}
			}
		})
		$(".index-l").click(function(){
			if(index>1){
				index--;
				$(this).css("color","#333").find("i").css("color","#f00");
				$(".index-r").css("color","#333").find("i").css("color","#f00");
				show(index,msg);
				if(index == 1){
					$(this).css("color","#cdcdcd").find("i").css("color","#cdcdcd");
				}
			}else{
				$(this).css("color","#cdcdcd").find("i").css("color","#cdcdcd");
			}
			
		})
		$(".index-r").click(function(){
			if(index<num){
				index++;
				$(this).css("color","#333").find("i").css("color","#f00");
				$(".index-l").css("color","#333").find("i").css("color","#f00");
				show(index,msg);
				if(index == num){
					$(this).css("color","#cdcdcd").find("i").css("color","#cdcdcd");
				}
			}else{
				$(this).css("color","#cdcdcd").find("i").css("color","#cdcdcd");
			}
			
		})
		$(".goods").on("mouseover","li>p:odd",function(){
			console.log(111)
			$(this).css({
				"text-decoration":"underline",
				"color":"#f00"
			})
		}).on("mouseout","li>p:odd",function(){
			$(this).css({
				"text-decoration":"none",
				"color":"#333"
			})
		}).on("click","li",function(){
			//跳转加上id让详情页检索相应的数据
			var id = $(this).find("span").data("id");
			location.href = "../html/details.html?id="+id;
		})
	}
});
function show(index,msg){
	$(".goods").html("");
					/*<li>
						<img src="../girlistimg/0.jpg"/>
						<p>99.90</p>
						<p>OTHERMIX七格格 2017夏装新款气质文艺范儿细竖条纹短袖休闲短款衬衫 </p>
					</li>*/
	var str = ""
	for(var i = (index-1)*8; i <Math.min(index*8,msg.list.length);i++ ){
		str += `<li>
					<img src="../girlistimg/${msg.list[i].src}"/>
					<p>${msg.list[i].price}</p>
					<p>${msg.list[i].name}</p>
					<span style="display:none" data-id="${msg.list[i].id}"></span>
				</li>`
	}
	$(".goods").html(str);
	$("ul[class^=index] li:not(:last)").each(function(){
		if(Number($(this).html()) == index){
			$(this).css({
				"color":"#f00",
				"border-color":"#f00"
			})
		}else{
			$(this).css({
				"color":"#333",
				"border-color":"#666"
			})
		}
	})
}
