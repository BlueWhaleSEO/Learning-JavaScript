function radioBtn(){

  var elements=document.form4.CourseOption.length;

  for( var i=0; i<elements; i++){

    if (document.form4.CourseOption[i].checked==true){

	  var selected=document.form4.CourseOption[i].value;
	  
	   alert("You have selected "+selected);		
		}
	}
}
