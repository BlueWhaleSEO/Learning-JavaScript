function checkPhoneNumberKeyUp(){
	var number = document.form12.phoneNumber.value;
	var dot = number.lastIndexOf(".");	
	for (var i=0; i<number.length; i++)
	{
	if (isNaN(number) || number < 0 || number.length > 14 || number != parseInt(number,10) || dot >= 0)
	{
		document.getElementById("invalid-number").innerHTML = "<small>Please enter a valid phone number</small>";
	}
	else
	{
		document.getElementById("invalid-number").innerHTML = "<small></small>";
	}
	}
}
function checkPhoneNumberOnClick(){
	var number2 = document.form12.phoneNumber.value;
	var dot = number2.lastIndexOf(".");	
	if (isNaN(number2) || number2 < 0 || number2.length > 14 || number2 != parseInt(number2,10) || dot >= 0)
	{
		alert("Please enter a valid phone number!");
	}
	else
	{
		alert("Your phone number has been submitted!");
	}
}

