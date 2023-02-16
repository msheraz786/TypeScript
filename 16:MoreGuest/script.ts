/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

let oldGuestList:string[]=["Muhammad Sheraz","Muhammad Shahzad","Muhammad Shahbaz","Faiz Ahmed"];

for(let oldGuest of oldGuestList){
    console.log(`Hello! Mr. ${oldGuest} is on Dinner with us`);
}
console.log("\nWe found a bigger dinner table\n");
oldGuestList.unshift("Muhammad Hussain");
let middleIndex:number = Math.round((oldGuestList.length/2)-1);
oldGuestList.splice(middleIndex,0,"Muhammad Hassan");
oldGuestList.push("Ali Hasnan");
for(let guest of oldGuestList){
    console.log(`Hello! Mr. ${guest} is join us on Dinner`);
}
