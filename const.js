// Write what is const
//........ Constant is a variable that can not be changed........
// Write what is the basic difference between let and const 
//.......The basic difference is that the variable declared with let can be reassigned but variable declared with const can not be reassigned.......

// Take radius input from the user and print the cicrumference of circle value with a good message
const PI = 3.145679;
let radius;
let cicrumference;

radius = window.prompt("Enter the Radius:");
radius = Number(radius);

cicrumference = 2 * PI * radius;
console.log("The Circumfrence is:" , cicrumference);
// Write why we should declare value of PI as const 
//-----we declare value of PI as a constant bcaz it has a fix value and if we assign pi varible by let it can be changed and our output goes wrong---------- 