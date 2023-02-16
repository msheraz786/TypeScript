/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
var gList = ["Muhammad Sheraz", "Muhammad Shahzad", "Ali", "Muhammad Shahbaz", "Faiz Ahmed"];
console.log("Mr. ".concat(gList[2], " is not able to attend the Dinner"));
gList[2] = "Hamza";
for (var _i = 0, gList_1 = gList; _i < gList_1.length; _i++) {
    var guest = gList_1[_i];
    console.log("Mr. ".concat(guest, " is attend the Dinner"));
}
