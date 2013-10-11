// JavaScript 
//Josh Myers
// October 10, 2013
//Expressions - Industrial 

//This project is intended to help a freelance developer manage the productivity of his or her time, as well as how much they made on a particular project vs. the amount of time that they spent on it; the idea being to help manage efficiency, and to better determine what projects are worthwhile moving forward. 


var hoursWorked = prompt("Please enter the number of hours you worked on this project:"); 
var hoursBilled = prompt("Please enter the number of hours you billed for this project:");  
var payment = prompt("Please enter how much the customer was charged for this project:"); 
var expense = prompt ("Please enter the cost of any expenses on this project:");  
alert("You worked" + " " + hoursWorked + " " + "and billed for" + " " + hoursBilled + " " + "and made $" + payment + " " + "on this project." );
var hourly = payment / hoursWorked;
var excessHours = hoursWorked - hoursBilled; 
var hourly2 = payment / hoursBilled
alert ("This means you worked" + " " + excessHours + " " + "hours in excess of what you billed for on your invoice, making $" + hourly + " " + "per hour on this project, after expenses, rather than the potential $" + hourly2 + " " + "that was billed for.")   

