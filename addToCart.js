// Global arrays
var quantities = [];
var prices = [];
var names = [];
var sums = [];

function addToCart1(qty1)
{
	// Adds item quantity to an array
	quantities.push(qty1);
	
	// Gets item price and name from web page
	var itemPrice = document.getElementById("itemPrice1").innerHTML;
	var itemName = document.getElementById("itemName1").innerHTML;
	var itemTotal = itemPrice * qty1;
	
	// Checks if there is something added to quantity array and if yes - adds item price and name to price and name arrays
	if (quantities.length != 0 && quantities[0] != 0)
	{
		prices.push(itemPrice);
		names.push(itemName);
		sums.push(itemTotal);
	}
	// If quantities array is empty or has zero on index 0 - remove index 0 and alert the customer
	else
	{
		quantities.shift();
		alert("Please choose desired quantity!");
	}
}
function addToCart2(qty2)
{
	// Adds item quantity to an array
	quantities.push(qty2);
	
	// Gets item price and name from web page
	var itemPrice = document.getElementById("itemPrice2").innerHTML;
	var itemName = document.getElementById("itemName2").innerHTML;
	var itemTotal = itemPrice * qty2;	

	// Checks if there is something added to quantity array and if yes - adds item price and name to price and name arrays
	if (quantities.length != 0 && quantities[0] != 0)
	{
		prices.push(itemPrice);
		names.push(itemName);
		sums.push(itemTotal);		
	}
	// If quantities array is empty or has zero on index 0 - remove index 0 and alert the customer
	else
	{
		quantities.shift();
		alert("Please choose desired quantity!");
	}
}
function addToCart3(qty3)
{
	// Adds item quantity to an array
	quantities.push(qty3);
	
	// Gets item price and name from web page
	var itemPrice = document.getElementById("itemPrice3").innerHTML;
	var itemName = document.getElementById("itemName3").innerHTML;
	var itemTotal = itemPrice * qty3;	

	// Checks if there is something added to quantity array and if yes - adds item price and name to price and name arrays
	if (quantities.length != 0 && quantities[0] != 0)
	{
		prices.push(itemPrice);
		names.push(itemName);
		sums.push(itemTotal);		
	}
	// If quantities array is empty or has zero on index 0 - remove index 0 and alert the customer
	else
	{
		quantities.shift();
		alert("Please choose desired quantity!");
	}
}
function addToCart4(qty4)
{
	// Adds item quantity to an array
	quantities.push(qty4);
	
	// Gets item price and name from web page
	var itemPrice = document.getElementById("itemPrice4").innerHTML;
	var itemName = document.getElementById("itemName4").innerHTML;
	var itemTotal = itemPrice * qty4;

	// Checks if there is something added to quantity array and if yes - adds item price and name to price and name arrays
	if (quantities.length != 0 && quantities[0] != 0)
	{
		prices.push(itemPrice);
		names.push(itemName);
		sums.push(itemTotal);		
	}
	// If quantities array is empty or has zero on index 0 - remove index 0 and alert the customer
	else
	{
		quantities.shift();
		alert("Please choose desired quantity!");
	}
}
function addToCart5(qty5)
{
	// Adds item quantity to an array
	quantities.push(qty5);
	
	// Gets item price and name from web page
	var itemPrice = document.getElementById("itemPrice5").innerHTML;
	var itemName = document.getElementById("itemName5").innerHTML;
	var itemTotal = itemPrice * qty5;

	// Checks if there is something added to quantity array and if yes - adds item price and name to price and name arrays
	if (quantities.length != 0 && quantities[0] != 0)
	{
		prices.push(itemPrice);
		names.push(itemName);
		sums.push(itemTotal);		
	}
	// If quantities array is empty or has zero on index 0 - remove index 0 and alert the customer
	else
	{
		quantities.shift();
		alert("Please choose desired quantity!");
	}
}
function addToCart6(qty6)
{
	// Adds item quantity to an array
	quantities.push(qty6);
	
	// Gets item price and name from web page
	var itemPrice = document.getElementById("itemPrice6").innerHTML;
	var itemName = document.getElementById("itemName6").innerHTML;
	var itemTotal = itemPrice * qty6;

	// Checks if there is something added to quantity array and if yes - adds item price and name to price and name arrays
	if (quantities.length != 0 && quantities[0] != 0)
	{
		prices.push(itemPrice);
		names.push(itemName);
		sums.push(itemTotal);		
	}
	// If quantities array is empty or has zero on index 0 - remove index 0 and alert the customer
	else
	{
		quantities.shift();
		alert("Please choose desired quantity!");
	}
}

function showCart() {

	// Declare variables and create the header, footer, and caption.
	var eTable = document.createElement("table");
	var eThead = document.createElement("thead");
	var eTbody = document.createElement("tbody");
	var eTfoot = document.createElement("tfoot");
	var eRow, eCell;
	var i, j;
	var sumTotal = 0.0;
	var sumTemp = 0.0;
  
	for(i in sums) 
	{ 
		sumTemp += parseFloat(sums[i]);
		sumTotal = sumTemp.toFixed(2);
	}

	// Declare stock data that would normally be read in from a stock Web site.
	var heading = ["Name","Price","Qty","Total"];
  
	// Insert the created elements into oTable.
	eTable.appendChild(eThead);
	eTable.appendChild(eTbody);
	eTable.appendChild(eTfoot);
  
	// Insert a row into the header and set its background color.
	eRow = document.createElement("tr");
	eThead.appendChild(eRow);
  
	// Create and insert cells into the header row.
	for (i=0; i<heading.length; i++)
	{
	eCell = document.createElement("th");
	eCell.innerHTML = heading[i];
	eRow.appendChild(eCell);
	}
  
	// Insert rows and cells into bodies.
	for (i=0; i<quantities.length; i++)
	{
	eRow = document.createElement("tr");
	eTbody.appendChild(eRow);
		for (j=0; j<1; j++)
		{
		eCell = document.createElement("td");
		eCell.innerHTML = names[i];
		eRow.appendChild(eCell);
		}
		for (j=0; j<1; j++)
		{
		eCell = document.createElement("td");
		eCell.innerHTML = "\u00A3" + prices[i];
		eRow.appendChild(eCell);
		}	
		for (j=0; j<1; j++)
		{
		eCell = document.createElement("td");
		eCell.innerHTML = quantities[i];
		eRow.appendChild(eCell);
		}
		for (j=0; j<1; j++)
		{
		eCell = document.createElement("td");
		eCell.innerHTML = "\u00A3" + (sums[i]).toFixed(2);
		eRow.appendChild(eCell);
		}	
	}
  
	// Create and insert rows and cells into the footer row.
	eRow = document.createElement("tr");
	eTfoot.appendChild(eRow);

	eCell = document.createElement("td");
	eRow.appendChild(eCell);
	eCell.colSpan = "4";
	eCell.innerHTML = "Total: \u00A3" + sumTotal;
	  
	  
	// Insert the table into the document tree.
	document.getElementById("itemsInShoppingCart").appendChild(eTable);
	  
	// Add optional table attributes
	eTable.setAttribute("id", "shoppingCartTable");
	eThead.setAttribute("id", "shoppingCartTableHeading");
	eTfoot.setAttribute("id", "shoppingCartTableFooter");  
	  
	// Calls the functions to style up the table
	stripedTable();
	highlightRows();
  
}

// Function to stripe the table
function stripedTable(){

	if (!document.getElementsByTagName) 
	{
	return false;
	}
	
	var tables = document.getElementsByTagName("tbody");

	for (var i=0; i<tables.length; i++)
	{
		var odd=false;
		var rows=tables[i].getElementsByTagName("tr");
			for (var j=0; j<rows.length; j++)
			{
			if (odd==true)
			{
				rows[j].setAttribute("class", "shoppingCartTableRowOdd");			
				odd=false;
			} 
			else 
			{ 
			odd=true;
			}
			}
	}
}

// Function to highlight rows
function highlightRows(){

	if (!document.getElementsByTagName) 
	{
		return false;
	}
		var rows=document.getElementsByTagName("tr");

		for ( var i=0; i<rows.length; i++)
		{
			rows[i].onmouseover=function()
			{
				this.style.fontWeight="bold";
				this.style.fontSize="large";
			}
			rows[i].onmouseout=function()
			{
			
				this.style.fontWeight="normal";
				this.style.fontSize="medium";			
			}
		}
}

// Validation funtions
function validateTheFormKeyUp(){ // validates each character on input
	// Get fomr inputs
	var phone = document.validationForm.userPhone.value;
	var dot = phone.lastIndexOf(".");	
	
	// Loop through each character in input field
	for (var i=0; i<phone.length; i++)
	{
	// Phone validation - If Not a Number - show warning
	if (isNaN(phone) || phone < 0 || phone.length > 14 || phone != parseInt(phone,10) || dot >= 0)
	{
		document.getElementById("invalid-data").innerHTML = "<small>Please enter a valid phone number</small>";
	}
	// Else - accept the input
	else
	{
		document.getElementById("invalid-data").innerHTML = "<small></small>";
	}
	}
}
function validateTheForm(){ // validates whole form when sent
	// Get form inputs
	var phone = document.validationForm.userPhone.value;
	var email = document.validationForm.userEmail.value;
	var firstName = document.validationForm.userName.value;
	var surname = document.validationForm.userSurname.value;	
	var dotPhone = phone.lastIndexOf(".");
	var dotEmail = email.lastIndexOf(".");
	var eta = email.indexOf("@");

	
	// Phone validation - If Not a Number / if there is nothing entered / if there is more than 14 characters / if there is decimal delimiter between numbers / if there is a dot among the numbers - show warning
	if (isNaN(phone) || phone < 0 || phone.length > 14 || phone != parseInt(phone,10) || dotPhone >= 0)
	{
		alert("Please enter a valid phone number!");
	}
	// Email validation - if @ is first character / if dot goes before @ / if there is less than 2 characters after dot - show alert
	else if (eta < 1 || dotEmail < eta || dotEmail+2 >= email.length)
	{
		alert("Please enter a valid email address!");
	}
	// Else - accept the input
	else
	{
		alert("Thank you, "+firstName+"! Your form has been submitted!");
	}
}