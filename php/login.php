<?php
$status = $_GET["status"];
$utel = $_GET["tel"];
$db = mysql_connect("localhost","root","root");
mysql_select_db("php",$db);
mysql_query("set names utf8");
if($status == "register"){
	$sql = "select * from aolaigou where tel='$utel'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	if($arr){
		echo "1";//用户名不可用，已拥有
	}else{
		echo "0";
	}
}else if($status == "login"){
	$upwd = $_GET["upwd"];
	$sql = "select * from aolaigou where tel='$utel'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	$flag = false;
	foreach($arr as $i){
		if($i == $upwd){
			$flag = true;
		}
	}
	
	if($flag){
		echo "1";//用户名密码都正确，可以登陆
	}else{
		echo "0";
		echo $upwd;
	}
}else{
	echo "参数有误";
}
?>