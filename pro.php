<?php
$server="localhost";
$un="root";
$up="";
$db="std";
$un1=$_POST['name'];
$fn=$_POST['Fathername'];
$mn=$_POST['Mothername'];
$pa=$_POST['Paddress'];
$pea=$_POST['Personaladdress'];
$s=$_POST['sex'];
$c=$_POST['city'];
$co=$_POST['course'];
$d=$_POST['district'];
$st=$_POST['state'];
$pi=$_POST['pincode'];
$ema=$_POST['emailid'];
$do=$_POST['dob'];
$mn1=$_POST['mobileno'];
$con=new mysqli($server,$un,$up,$db);
$qry="insert into std(name,fathername,mothername,paddress,personaladdress,sex,city,course,district,state,pincode,emailno,dob,mobileno)
VALUES('$un1','$fn','$mn','$pa','$pea','$s','$c','$co','$d','$st','$pi','$ema','$do','$d','$mn1')";
if($query=$con->query($qry))
	echo "registration successfull";
else
	echo "not register";
?>