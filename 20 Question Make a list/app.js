"use strict";
//Think of something you could store in a array. For example,
//you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
//Write a program that creates a list containing these items.
//1st method using  for loop
//let cities:string[]=["lahore ","karachi ","islamabad ","saudiaArab ","england "];
//console.log("list of cities" )
//for(let city of cities)
//{console.log(city)}
//2nd way using for  of loop
let cities = ["lahore ", "karachi ", "islamabad ", "saudiaArab ", "england "];
console.log("list of cities");
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
