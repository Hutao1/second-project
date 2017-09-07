function checklogin(){
	console.log(getCookie("login"))
	if(!getCookie("login")){
		location.href = "http://127.0.0.1/php/secondtest/second-project/html/login.html";
		return;
	}else{
		location.href = "http://127.0.0.1/php/secondtest/second-project/html/shopcar.html";
	}
}
