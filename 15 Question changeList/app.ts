//hanging Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

 //Print a second set of invitation messages, one for each person who is still in your list.

 let names:string[]=["saba ","anabia ","ayesha "];
let message="Tomorrow you are invited to dinner at our house! ";
for (let i=0;i<names.length;i++){
console.log(    ` Dear\n `, names[i] + message)}

let not_coming="ayesha";
let new_guest="yasmeen ";
names[2]=new_guest;


let newList: string[] =["saba ","anabia ","yasmeen "];
let messege= "Tomorrow you are invited to dinner at our house! " ;
for (let i=0;i<names.length;i++){
console.log(`RESPECTED MAAM\n`,  newList[i]  +  messege)}

