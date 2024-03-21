//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
 //Print a new set of invitation messages, one for each person in your list.

 let names:string[]=["saba ","anabia ","ayesha "];
 //let message="Tomorrow you are invited to dinner at our house! ";
 //for (let i=0;i<names.length;i++){
 //console.log(    ` Dear\n `, names[i] + message)}
 
 let not_coming="ayesha";
 let new_guest="yasmeen ";
 names[2]=new_guest;
 

 //same as question 15
 
 let newList: string[] =["saba ","anabia ","yasmeen "];
 let messege= "Tomorrow you are invited to dinner at our house! " ;
 for (let i=0;i<names.length;i++){
 console.log(`RESPECTED MAAM\n`,  newList[i]  +  messege)}

 //inform people that we found bigger table

 let inform="we found a bigger dinner table so we invited 3 more guests THANKHYOU!   ";

//adding three more guest

newList.unshift(`bilal `,`naeem `,`qasim `);
for (let i=0;i<newList.length;i++){
    console.log(`RESPECTED MAAM/SIR \n\t`,  newList[i]   + messege + inform)}
   
 