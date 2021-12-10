function validate() {
      
    if( document.myForm.name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.name.focus() ;
       return false;
    }
    if( document.myForm.email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.email.focus() ;
       return false;
    }
    if( document.myForm.password.value == "" ) {
        alert( "Please provide your Password!" );
        document.myForm.password.focus() ;
        return false;
     }
    
    return( true );}