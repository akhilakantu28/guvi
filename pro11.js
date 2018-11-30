function validation()
{ 
   if( document.regform1.name.value == "" )
   {
     alert( "Please provide your Name!" );
     document.regform1.name.focus() ;
     return false;
   }
   if( document.regform1.Fathername.value == "" )
   {
     alert( "Please provide your Father Name!" );
     document.regform1.Fathername.focus() ;
     return false;
   }
   
   if( document.regform1.paddress.value == "" )
   {
     alert( "Please provide your Postal Address!" );
     document.regform1.paddress.focus() ;
     return false;
   }
   if( document.regform1.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.regform1.personaladdress.focus() ;
     return false;
   }
   if ( ( regform1.sex[0].checked == false ) &&(regform1.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }   
   if( document.regform1.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.regform1.City.focus() ;
     return false;
   }   
   if( document.regform1.Course.value == "-1" )
   {
     alert( "Please provide your Course!" );
    
     return false;
   }   
   if( document.regform1.District.value == "-1" )
   {
     alert( "Please provide your Select District!" );
    
     return false;
   }   
   if( document.regform1.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }
   if( document.regform1.pincode.value == "" ||
           isNaN( document.regform1.pincode.value) ||
           document.regform1.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.regform1.pincode.focus() ;
     return false;
   }
 var email = document.regform1.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.regform1.emailid.focus() ;
     return false;
 }
  if( document.regform1.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.regform1.dob.focus() ;
     return false;
   }
  if( document.regform1.mobileno.value == "" ||
           isNaN( document.regform1.mobileno.value) ||
           document.regform1.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.regform1.mobileno.focus() ;
     return false;
   }
   return( true );
}
