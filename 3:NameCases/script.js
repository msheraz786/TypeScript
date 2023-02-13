/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var personName = "Muhammad Sheraz";
console.log("Person name in lowercase = ".concat(personName.toLowerCase()));
console.log("Person name in UPPERCASE = ".concat(personName.toUpperCase()));
//METHOD ONE FOR CONVERT STING TO TITLE STRING
// let titleCase:string="";
// for(let i=0; i<personName.split(' ').length; i++){
//     if(i!=0){
//         titleCase+=" ";
//     }
//     titleCase+=personName.split(' ')[i][0].toUpperCase()+personName.split(' ')[i].slice(1)
// }
// console.log(`Person name is TitleCase = ${titleCase}`);
//METHOD TWO FOR CONVERT STING TO TITLE STRING
var titleCase = [];
for (var i = 0; i < personName.split(' ').length; i++) {
    titleCase.push(personName.split(' ')[i][0].toUpperCase() + personName.split(' ')[i].slice(1));
}
console.log("Person name in TitleCase = ".concat(titleCase.join(" ")));
