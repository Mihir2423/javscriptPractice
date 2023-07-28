// Implement ternary operator
// Create a function to find the biggest of three numbers and return the biggest number
// Show the result as an alert

//ternary operator is a shortcut of a if/else statement it takes 3 operands 1. condition with "?" 2. expression if true 3. expression if false

function findBiggestNumber(num1, num2, num3) {
    let biggestNumber = (num1 >= num2 && num1 >= num3) ? num1 :(num2 >= num1 && num2 >= num3) ? num2 : num3;
  return biggestNumber;
  }
  let number1 = parseFloat(prompt("Enter the first number:"));
  let number2 = parseFloat(prompt("Enter the second number:"));
  let number3 = parseFloat(prompt("Enter the third number:"));
  
  let result = findBiggestNumber(number1, number2, number3);
  
  alert("The biggest number is: " + result);

