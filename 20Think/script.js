/*
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mountainsList = ["K2", "Mount Everast", "Himalian"];
var countriesList = ["Saudia", "Pakistan", "UK", "USA"];
var citiesList = ["Rawalpindi", "Islamabad", "Lahore", "Karachi"];
var riversList = ["Ravi", "Sutlij", "Sindh", "Kabul"];
var languagesList = ["Arabic", "Urdu", "Hindi", "English"];
var combineList = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], mountainsList, true), countriesList, true), citiesList, true), languagesList, true), riversList, true);
console.log(combineList);
