<?php
$utel = $_GET["tel"];
$upwd = $_GET["upwd"];
$db = mysql_connect("localhost","root","root");
mysql_select_db("php",$db);
mysql_query("set names utf8");
$sql = "insert into aolaigou(tel,upws) values('$utel','$upwd')";
mysql_query($sql);
?>