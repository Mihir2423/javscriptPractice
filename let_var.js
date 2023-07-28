// Explain let vs var with your example (should not be similar to video's example)
//let variables are limited to block scope{}
//var variables are limited to function(){}
function exampleFunction() {
    // Using 'var' for variable declaration
    for (var i = 0; i < 5; i++) {
    }
    console.log("Value of i (inside the function) after the loop: " + i);
}
  function exampleFunctionWithLet() {
    for (let j = 0; j < 5; j++) {
    }
}
  // Using 'var' outside a function
  for (var k = 0; k < 5; k++) {
  }
  console.log("Value of k (outside the function) after the loop: " + k);
// Create a variable name and address
// and print the name of a person and their addres using template literals
var name = "Pranav Lodu";
var address = "Knowledge Park 2, Greater Noida";

console.log(`Name: ${name}`);
console.log(`Address: ${address}`);