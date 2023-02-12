/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var personName = "Muhammad Sheraz";
var titleCase = [];
console.log("Person name in lowercase = ".concat(personName.toLowerCase()));
console.log("Person name in UPPERCASE = ".concat(personName.toUpperCase()));
for (var i = 0; i < personName.split(' ').length; i++) {
    titleCase.push(personName.split(' ')[i][0].toUpperCase() + personName.split(' ')[i].slice(1));
}
console.log("Person name in TitleCase = ".concat(titleCase.join(" ")));
