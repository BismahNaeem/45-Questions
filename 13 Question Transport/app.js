"use strict";
//Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transports = ["elantra", "civic", "audi", "landcruosier"];
for (let i = 0; i < transports.length; i++) 
//transports.forEach(transport=> {console.log(`i would like to own a; ${transport}.`);});
{
    console.log(`i would like to own a ` + transports[i]);
}
