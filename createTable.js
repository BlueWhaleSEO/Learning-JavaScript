function createTable(){

var name = ["Name",""];
name.push(document.form15.studentName.value);

var age = ["Age",""];
age.push(document.form15.studentAge.value);

var degree = ["Degree",""];
degree.push(document.form15.studentDegree.value);


		var tab = document.createElement("table");
		tab.setAttribute("border", "1");
		tab.id = "tableStudents";
		
		document.getElementById("tableArea").appendChild(tab);

		
		var tbdy = document.createElement("tbody");
		tab.appendChild(tbdy);
		
		for (var i=0; i<name.length; i++) {
			var tr = document.createElement("tr");
			tbdy.appendChild(tr);
			var tdName = document.createElement("td");
			tdName.appendChild(document.createTextNode(name[i]));
			tr.appendChild(tdName);
			var tdAge = document.createElement("td");
			tdAge.appendChild(document.createTextNode(age[i])); 
			tr.appendChild(tdAge);
			var tdDegree = document.createElement("td");
			tdDegree.appendChild(document.createTextNode(degree[i])); 
			tr.appendChild(tdDegree);		
			
		}
}



