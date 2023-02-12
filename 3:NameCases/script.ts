/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let personName:string="Muhammad Sheraz";
let titleCase:string[]=[];
console.log(`Person name in lowercase = ${personName.toLowerCase()}`);
console.log(`Person name in UPPERCASE = ${personName.toUpperCase()}`);
for(let i=0; i<personName.split(' ').length; i++){
    titleCase.push(personName.split(' ')[i][0].toUpperCase()+personName.split(' ')[i].slice(1));
}
console.log(`Person name in TitleCase = ${titleCase.join(" ")}`);
