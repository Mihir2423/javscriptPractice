// take a variable and store a string in, and print the first and last word in it
// eg: "This is a string"
// Output : First Word : This, Second Word : string

// ! Follow this output format

let fullword = "This is a string";
let firstword;
let lastword;

firstword = fullword.slice(0 , 4);
lastword = fullword.slice(10);

console.log("First Word:",firstword);
console.log("Second Word:",lastword);