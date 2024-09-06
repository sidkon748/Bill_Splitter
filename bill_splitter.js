// Calculate the Tip
let bill = 100; // Declare variable bill equal to a number
let tip = (bill => 50 && bill <= 300) ? bill * .15 : bill * .2; /* If variable bill is between 50 and 300, it's multiplied by .15, 
else it's multiplied by .2*/

//Output Details
console.log("The bill was $" + bill +", the tip was $" + tip +", and the total value is $" + (tip + bill));

//Create a Function calculateTip
function calculateTip(billAmount) {
    if (billAmount >= 50 && billAmount <= 300) {
        return billAmount * 0.15; // 15% tip for bills between $50 and $300
    } else {
        return billAmount * 0.20; // 20% tip for any other amount
    }
}
console.log(calculateTip(100));//Display tip amount with billAmount input as a number 

//Utilize Arrays

// Data Set 1: Bill Calulations
const bills1 = [275, 40, 430];
const tips1 = bills1.map(calculateTip);
const totals1 = bills1.map((bill, index) => bill + tips1[index])

// Data Set 2: Bill Calulations
const bills2 = [125, 555, 44];
const tips2 = bills2.map(calculateTip);
const totals2 = bills2.map((bill, index) => bill + tips1[index])

// Bills, Tips, and Totals for Data Set 1
console.log("Bills, Tips, and Totals from Data Set 1");
console.log("Bills:", bills1);
console.log("Tips:", tips1);
console.log("Totals:", totals1);

// Bills, Tips, and Totals for Data Set 2
console.log("Bills, Tips, and Totals from Data Set 2");
console.log("Bills:", bills2);
console.log("Tips:", tips2);
console.log("Totals:", totals2);