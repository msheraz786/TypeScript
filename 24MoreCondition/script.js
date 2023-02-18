/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
console.log("Tests for equality and inequality with strings");
var fullName = "Muhammad Sheraz";
console.log(fullName === "Muhammad Sheraz");
console.log(fullName !== "Muhammad Sheraz");
console.log("\nTests using the lower case function");
console.log(fullName.toLowerCase() === "muhammad sheraz");
console.log("\nNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
var personAge = 30;
console.log(personAge === 30);
console.log(personAge !== 30);
console.log(personAge > 20);
console.log(personAge < 35);
console.log(personAge >= 30);
console.log(personAge <= 30);
console.log("\nTests using \"and\" and \"or\" operators");
console.log(fullName === "Muhammad Sheraz" && personAge === 30);
console.log(fullName === "Muhammad Sheraz" || personAge === 25);
console.log("\nTest whether an item is in a array");
var itemArray = ["Muhammad Sheraz", "Ali"];
console.log(itemArray.indexOf("Muhammad Sheraz") >= 0 ? "Item is in Array" : "Item Not in Array");
console.log("\nTest whether an item is not in a array");
var newArray = ["Muhamamd Sheraz", 20, true];
console.log(newArray.indexOf(false) < 0 ? "Item is not in Array" : "Item is in Array");
