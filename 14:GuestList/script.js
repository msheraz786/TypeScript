/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var guestList = ["Muhammad Sheraz", "Muhammad Shahzad", "Ali", "Muhammad Shahbaz", "Faiz Ahmed"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello! Mr. ".concat(guest, ", You are invited on dinner. Thanks"));
}
