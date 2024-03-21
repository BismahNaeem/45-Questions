//shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//. Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//. Print a message to each of the two people still on your list, 
//letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list
//. Print your list to make sure you actually have an empty list at the end of your program.

//make a list of guest like qustion 16

let names:string[]=["saba ","anabia ","ayesha ","ulfat "];
let message="Tomorrow you are still invited to dinner at our house! ";


//for removing guest we use while loop

console.log("\nunfortunately we caanot arrange a table so that why we only invite 2 people on dinner")
while(names.length>2)
{
    let remove_guest =names .pop();
    console.log(`sorry madam,${remove_guest}you are notinvited at dinner `);

}
//sending new invitition

for (let i=0;i<names.length;i++)
{
    console.log(`RESPECTED MAAM\n`,  names[i]  +  message)}


    //for empty list
names.splice(0,2)
console.log(names)