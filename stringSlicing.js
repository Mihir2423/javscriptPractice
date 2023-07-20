// take a variable and store a string in, and print the first and last word in it
// eg: "This is a string"
// Output : First Word : This, Second Word : string

// ! Follow this output format

let fullword = "This is a string";
let firstword;
let lastword;

fullword = fullword.trim(); // To get rid of case where there are spaces before or after the string

firstword = fullword.slice(0, fullword?.indexOf(" "));
lastword = fullword.slice(fullword?.lastIndexOf(" ") + 1);
// "?" : this is called method chaining - google kro

console.log("First Word:", firstword);
console.log("Second Word:", lastword);
