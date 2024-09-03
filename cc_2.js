// Calculate the Tip
let bill = 100; // Declare variable bill equal to a number
let tip = (bill => 50 && bill <= 300) ? bill * .15 : bill * .2; /* If variable bill is between 50 and 300, it's multiplied by .15, 
else it's multiplied by .2*/

//Output Details
console.log("The bill was $" + bill +", the tip was $" + tip +", and the total value is $" + (tip + bill))