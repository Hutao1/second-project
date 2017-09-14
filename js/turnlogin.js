function checklogin(){
	console.log(getCookie("login"))
	if(!getCookie("login")){
		location.href = "../html/login.html";
		return;
	}else{
		location.href = "../html/shopcar.html";
	}
}
