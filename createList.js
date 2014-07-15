var list = document.createElement("ol");

function createList() {
	
	document.getElementById("list1").appendChild(list);
	
	var li = document.createElement("li");
	var val = document.form14.text1.value;
	var text = document.createTextNode(val);
	
	list.appendChild(li).appendChild(text);

}


