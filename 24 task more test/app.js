"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with string
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//testing with strings
console.log("testing equality with strings.");
console.log("apple" == "apple"); //true
console.log("apple" == "Apple"); //false
//testing with lowercase function
console.log("testing with lower case");
console.log("Apple".toLowerCase() == "apple"); //true
//numarical test
console.log("numarical tests equality ,inequality,greaterthan, less then,");
console.log(2 == 2); //true
console.log(9 == 2); //false
console.log(8 > 2); //true
console.log(10 < 1); //false
//test using AND or OR
console.log("test with `and`or `or`");
console.log(true && false); //false
console.log(true, false); //true
//testing an item is in a arry
let fruits = ["apple", "banana", "mango"];
console.log("is apple in fruits?");
console.log(fruits.includes("apple")); //true
//testing an item not in a array
console.log("is cherry not in  friuts?");
console.log(!fruits.includes("cherry")); //true
