"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
let names = ["saba ", "anabia ", "ayesha "];
let message = "Tomorrow you are invited to dinner at our house! ";
for (let i = 0; i < names.length; i++) {
    console.log(` Dear\n `, names[i] + message);
}
