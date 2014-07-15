function compare2(){
var ageOfPeople = [56,23,45,21,2,67,34];
alert(ageOfPeople);
ageOfPeople.sort(compare);
function compare(a, b)
{ 
   		return b - a;    
}
alert(ageOfPeople);
}


