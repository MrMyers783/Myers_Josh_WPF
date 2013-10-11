//Josh Myers, October 10, 2013, Expressions Worksheet


//Dog Years

var sparkyAge = 5; // Given variable
var dogYears = sparkyAge*7; //result variable

console.log("Sparky is" + " " + sparkyAge + " " + "human years old, which is" + " " + dogYears  + " " +  "in dog years.")


//Slice of Pie

var slicesPerPizza = 10; //given variable
var people = 25;  //given variable 
var pizzasOrdered = 5; //given variable

var totalSlices = pizzasOrdered * slicesPerPizza; //determines total slices 
var slicesPerPerson = totalSlices / people;  

console.log("Each person ate" + " " + slicesPerPerson + " " + " slices of pizza at the party.")

var sparkySlices = totalSlices % people; //determines remainder of pizza

console.log("Sparky got" + " " + sparkySlices + " " + "slices of pizza.")

 
//average shopping bill 

var bills = [56, 24, 77, 53, 27]; //given variable for five grocery bills

var total = bills[0] + bills[1] + bills[2] + bills[3] + bills[4]; //provides total of grocery bills
var average = total / 5;                                          

console.log("You have spent a total of" + " " + "$" + total + " " + "on groceries over 5 weeks. That is an average of" + " " + "$" + average + " " + "per week.")

//discounts

var price = 100; //original price - given variable 
var discount = 25; //Discount - given variable
var desc = "shirt"; //description - given variable 
var tax = .0625; //sales tax - given variable in decimal for ease of calculation

var perc = .01 //converts discount into decimal for calculation 

var discounted = price - (perc * discount * price);  //price after discount
var withTax = discounted * tax + discounted; 

console.log ("Your" + " " + desc + " " + "was originally $" + price + ", but after a" + " " + String(discount) + "% discount, it is now $" + discounted + " " + "without tax, and $" + withTax + " " + "with tax.") 
