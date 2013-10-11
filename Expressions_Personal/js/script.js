// Josh Myers
// October 10, 2013
// Expressions 

//Calculating Monthly Expenses

var expenses = [prompt("Please enter your month rent/mortgage:"), prompt("Please enter the cost of your monthly electric bill:"), prompt("Please enter the cost of your monthly gas/oil bill:"), prompt("Please enter the cost of your monthly cable/internet bill:"), prompt("Please enter the cost of your monthly car payments and/or car insurance bill:"), prompt("Please enter the cost of any miscellaneous expenses:") ]

var income = prompt("Please enter your total monthly income:");  

var totalExp = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4] + expenses[5];

var remaining = income - totalExp; 

alert("Your total expenses are: $" + totalExp)
alert("After subtracting this from your monthly income, you have $" + remaining + " " + "to save and spend.") 


 