function validation()
{
 var A=document.regform.name;
 var B=document.regform.ema;
 var C=document.regform.phno;
 
var l= /^[A-Za-z]+$/;
if(A.value=="" || A.value.match(l)==null)
{
   alert("name cant be blank");
   // A.focus();
   return flase;

}
