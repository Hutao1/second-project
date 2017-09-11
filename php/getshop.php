<?php
$method = $_GET["method"];
$utel = $_GET["tel"];
$db = mysql_connect("localhost","root","root");
mysql_select_db("php",$db);
mysql_query("set names utf8");
if($method == "get"){
	$sql = "select * from aolaigou where tel='$utel'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	echo $arr["ushop"];
}else if($method == "set"){
	$ushop = $_GET["ushop"];
	$sql = "update aolaigou set ushop='$ushop' where tel='$utel'";
	$res = mysql_query($sql);
	echo $ushop;
}else{
	echo "参数有误";
}
?>