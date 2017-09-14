$(".foot").load("../html/home.html .footer");
if(!getCookie("login")){
		location.href = "../html/login.html";
	}
$(".logo").click(function(){
	location.href = "../html/home.html";
})
logined();
getNum();
/*<tr>
					<td><input type="checkbox" name="choose"/></td>
					<td>
						<div class="message">
							<img src="../girlistimg/0small.jpg"/>
							<div class="msg-con">支持深圳自提] 梵思诺VERSINO 男装衬衫 HAAP-T5A006
10A(10A)红色00L</div>
						</div>
					</td>
					<td>￥298</td>
					<td>
						<ul>
							<li>+</li>
							<li>
								<input type="text" class="num" value="1"/>
							</li>
							<li>-</li>
						</ul>
					</td>
					<td>￥298</td>
					<td><span>删除</span></td>
				</tr>*/
$.ajax({
	type:"get",
	url:"../php/getshop.php",
	data:"method=get&tel="+getCookie("login").tel,
	success:function(msg1){
//		id=0_num=1;id=4_num=1;id=6_num=2
		if(msg1!=""){
			$.ajax({
				type:"get",
				url:"../girldress_json/girldress.json",
				success:function(msg2){
					var arr = msg1.split(";");
					var name = "",price="",smallimg="";
					var sum = 0;
					for(var l = 0 ; l < arr.length; l++){
						bianli:
						for(var i in msg2.list){
							for(var j in msg2.list[i]){
								if(msg2.list[i][j] == arr[l].split("_")[0].split("=")[1]){
									name = msg2.list[i].name;
									price=msg2.list[i].price;
									smallimg=msg2.list[i].smallimg;
									break bianli;
								}
							}
						}
						var $tr = $("<tr></tr>");
						$tr.html(`<td><input type="checkbox" name="choose"/></td>
							<td>
								<div class="message">
									<img src="http://../girlistimg/${smallimg}"/>
									<div class="msg-con">${name}</div>
								</div>
							</td>
							<td>${price}</td>
							<td>
								<ul>
									<li class="add">+</li>
									<li>
										<input type="text" class="num" value="${arr[l].split("_")[1].split("=")[1]}"/>
									</li>
									<li class="sub">-</li>
								</ul>
							</td>
							<td>￥${arr[l].split("_")[1].split("=")[1]*price.substr(1,price.length)}</td>
							<td><span>删除</span><i data-list="${l}"></i></td>`);
						$(".list").append($tr);
						sum+=arr[l].split("_")[1].split("=")[1]*price.substr(1,price.length);
					}
					$(".end span").html("总计:&nbsp;￥"+sum);
					$(".list").on("click",".add",function(){
						var va = $(this).next().find("input").attr("value");
						$(this).next().find("input").attr("value",parseInt(va)+1);
						$(this).parent().parent().next().html("￥"+(parseInt(va)+1)*$(this).parent().parent().prev().html().substr(1,$(this).parent().parent().prev().html().length));
					}).on("click",".sub",function(){
						var va = $(this).prev().find("input").attr("value");
						if(parseInt(va) > 1){
							$(this).prev().find("input").attr("value",parseInt(va)-1);
							$(this).parent().parent().next().html("￥"+(parseInt(va)-1)*$(this).parent().parent().prev().html().substr(1,$(this).parent().parent().prev().html().length));
						}
					})
					$(".allchoose").click(function(){
						var flag = $(this).prop("checked");
						$("input[type=checkbox]").prop("checked",flag);
					})
				}
			});
			
		}
	}
});
//删除
$(".list").on("click","span",function(){
	$(this).parent().parent().remove();
	var that = $(this);
	$.ajax({
		type:"get",
		url:"http://../php/getshop.php",
		data:"method=get&tel="+getCookie("login").tel,
		success:function(msg){
			var arr = msg.split(";");
			var del = that.next().data("list");
			var reg = new RegExp(arr[del]);
			var reg2 = new RegExp(arr[del]+";");
			var reg3 = new RegExp(";"+arr[del]);
			var str = "";
			if(reg2.test(msg)){
				str = msg.replace(reg2,"");
			}else if(reg3.test(msg)){
				str = msg.replace(reg3,"");
			}else{
				str = msg.replace(reg,"");
			}
			$.ajax({
				type:"get",
				url:"http://../php/getshop.php",
				data:"method=set&tel="+getCookie("login").tel+"&ushop="+str,
				success:function(msg){
					console.log(msg)
				}
			});
		}
	})
})
