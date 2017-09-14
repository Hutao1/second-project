$("#header").load("../html/lorepu.html .header");
$("#footer").load("../html/lorepu.html .footer");
var telflag = false,pwdflag = false;
if(getCookie("user")!=null){
	telflag = true;
	pwdflag = true;
	$("#rem").prop("checked","true");
	var _json = getCookie("user");
	$("#tel").val(_json.tel);
	$("#pwd").val(_json.pwd);
}
$("#tel").blur(function(){
	var reg = /^1\d{10}$/;
	if(reg.test($(this).val())){
		$(".teltip").html("");
		telflag = true;
	}else{
		$(".teltip").html("请输入手机号");
		telflag = false;
	}
})
$("#submit").click(function(){
	var reg = /^\w{6,20}$/;
	if(reg.test($("#pwd").val())){
		$(".pwdtip").html("");
		pwdflag = true;
	}else{
		$(".pwdtip").html("请输入密码");
		pwdflag = false;
	}
	if(telflag&&pwdflag){
		$.ajax({
			type:"get",
			url:"../php/login.php",
			data:"status=login&tel="+$("#tel").val()+"&upwd="+$("#pwd").val(),
			success:function(msg){
				if(msg == "1"){
					//登录成功
					setCookie("login",`{"tel":${$("#tel").val()},"pwd":${$("#pwd").val()}}`);
					if($("#rem").prop("checked")){
						setCookie("user",`{"tel":${$("#tel").val()},"pwd":${$("#pwd").val()}}`,2);
					}else{
						removeCookie("user");
					}
					location.href = "../html/home.html"
				}else{
					$(".fail").css("display","block").fadeOut(3000);
				}
			}
		});
	}
})
