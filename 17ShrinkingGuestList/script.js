/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.z

*/
var guestsInvited = ["Ali", "Ahmed", "Aslam", "Naveed", "Muneeb"];
//Printing Guest List Array
console.log(guestsInvited);
console.log("Sorry! We have less dinner space, I only invite two people for dinner");
for (var i = guestsInvited.length; i > 2; i--) {
    console.log("Sorry Mr. ".concat(guestsInvited[i - 1], ", due to shortage of space i can't invite you on dinner"));
    guestsInvited.pop();
}
for (var _i = 0, guestsInvited_1 = guestsInvited; _i < guestsInvited_1.length; _i++) {
    var guest = guestsInvited_1[_i];
    console.log("Mr.".concat(guest, " you are still invited for Dinner"));
}
guestsInvited.splice(0, guestsInvited.length);
console.log(guestsInvited);
