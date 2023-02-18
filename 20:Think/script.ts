/*
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/

let mountainsList:string[]=["K2","Mount Everast","Himalian"];
let countriesList:string[]=["Saudia","Pakistan","UK","USA"];
let citiesList:string[]=["Rawalpindi","Islamabad","Lahore","Karachi"];
let riversList:string[]=["Ravi","Sutlij","Sindh","Kabul"];
let languagesList:string[]=["Arabic","Urdu","Hindi","English"];
let combineList:string[]=[...mountainsList,...countriesList,...citiesList,...languagesList,...riversList];
console.log(combineList);