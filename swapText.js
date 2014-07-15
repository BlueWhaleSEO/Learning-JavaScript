function swapText(){

	var tempText1 = document.getElementById("h4Tag1").innerHTML;
	var tempText2 = document.getElementById("h4Tag2").innerHTML;
	
	document.getElementById("h4Tag2").innerHTML = tempText1;
	document.getElementById("h4Tag1").innerHTML = tempText2;

}


