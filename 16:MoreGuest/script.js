/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
var oldGuestList = ["Muhammad Sheraz", "Muhammad Shahzad", "Muhammad Shahbaz", "Faiz Ahmed"];
for (var _i = 0, oldGuestList_1 = oldGuestList; _i < oldGuestList_1.length; _i++) {
    var oldGuest = oldGuestList_1[_i];
    console.log("Hello! Mr. ".concat(oldGuest, " is on Dinner with us"));
}
console.log("\nWe found a bigger dinner table\n");
oldGuestList.unshift("Muhammad Hussain");
var middleIndex = Math.round((oldGuestList.length / 2) - 1);
oldGuestList.splice(middleIndex, 0, "Muhammad Hassan");
oldGuestList.push("Ali Hasnan");
for (var _a = 0, oldGuestList_2 = oldGuestList; _a < oldGuestList_2.length; _a++) {
    var guest = oldGuestList_2[_a];
    console.log("Hello! Mr. ".concat(guest, " is join us on Dinner"));
}
