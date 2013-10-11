// Josh Myers
// October 10, 2013
// Expressions 

//Calculating My Monthly Expenses to help me keep track and stay in the black. 

var expenses = [prompt("Please enter your month rent/mortgage:"), prompt("Please enter the cost of your monthly electric bill:"), prompt("Please enter the cost of your monthly gas/oil bill:"), prompt("Please enter the cost of your monthly cable/internet bill:"), prompt("Please enter the cost of your monthly car payments and/or car insurance bill:"), prompt("Please enter the cost of any miscellaneous expenses:") ]

var income = prompt("Please enter your total monthly income:");  

var totalExp = Number(expenses[0]) + Number(expenses[1]) + Number(expenses[2]) + Number(expenses[3]) + Number(expenses[4]) +  Number(expenses[5]);

var remaining = income - totalExp; 

alert("Your total expenses are: $" + totalExp)
alert("After subtracting this from your monthly income, you have $" + remaining + " " + "to save and spend.") 


 