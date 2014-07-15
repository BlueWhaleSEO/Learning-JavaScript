function DayOfTheWeek(day)
{
var day = parseInt(day);
switch (day)
{
case 1:
  alert("It's Monday");
  break;
case 2:
  alert("It's Tuesday");
  break;
case 3:
  alert("It's Wednesday");
  break;
case 4:
  alert("It's Thursday");
  break;
case 5:
  alert("It's Friday");
  break; 
case 6:
  alert("It's Saturday");
  break;  
case 7:
  alert("It's Sunday");
  break;  
default:
  alert("Not a valid day of the week!");
}
}