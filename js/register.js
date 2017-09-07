$("#header").load("http://127.0.0.1/php/secondtest/second-project/html/lorepu.html .header");
$("#footer").load("http://127.0.0.1/php/secondtest/second-project/html/lorepu.html .footer");
var telflag = false,pwdflag = false,rpwdflag = false;
$("#tel").focus(function(){
	$(".teltip").html("请输入手机号").css("color","#000");
}).blur(function(){
	var reg =/^1\d{10}$/;
	$(".teltip").css("color","red");
	if(reg.test($(this).val())){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1/php/secondtest/second-project/php/login.php",
			data:"status=register&tel="+$(this).val(),
			success:function(msg){
				if(msg == "0"){
					$(".teltip").html("");
					telflag = true;
				}else if(msg == "1"){
					$(".teltip").html("对不起，用户名已存在！");
					telflag = false;
				}
			}
		});
	}else{
		$(".teltip").html("手机号不正确");
		telflag = false;
	}
})
$("#pwd").focus(function(){
	$(".pwdtip").html("6-20位字符,可使用字母、数字或字符的组合").css("color","#000");
}).blur(function(){
	var reg =/^\w{6,20}$/;
	if(!reg.test($(this).val())){
		$(".pwdtip").html("密码不符合规范").css("color","red");
		pwdflag = false;
	}else{
		$(".pwdtip").html("");
		pwdflag = true;
	}
})
$("#rpwd").focus(function(){
	$(".rpwdtip").html("请再次输入密码").css("color","#000");
}).blur(function(){
	if($(this).val() == $("#pwd").val()){
		$(".rpwdtip").html("");
		rpwdflag = true;
	}else{
		$(".rpwdtip").html("两次密码不一致").css("color","red");
		rpwdflag = false;
	}
})
$("#submit").click(function(){
	if(telflag&&pwdflag&&rpwdflag){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1/php/secondtest/second-project/php/register.php",
			data:"tel="+$("#tel").val()+"&upwd="+$("#pwd").val(),
			success:function(msg){
//				console.log(msg);
				location.href = "http://127.0.0.1/php/secondtest/second-project/html/home.html";
			}
		});
	}else{
		$(".teltip").html("请输入手机号").css("color","#f00");
		$(".pwdtip").html("6-20位字符,可使用字母、数字或字符的组合").css("color","#f00");
		$(".rpwdtip").html("请再次输入密码").css("color","#f00");
	}
})

