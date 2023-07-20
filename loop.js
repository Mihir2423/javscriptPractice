// create a variable that stores an integer between 30 - 99
// print the number from 1 - 100, 
// if number is a multiple of 13 dont print it (apply continue statement)
// if the number is equal to you variable, break out from the loop.


const randomnumber = Math.floor(Math.random() * (99 - 30 + 1)) + 30;

console.log("Random Integer:", randomnumber);

for (let number = 1; number <= 100; number++) {
    if (number % 13 === 0) {
      continue;
    }
    console.log(number);
    if (number === randomnumber) {
      console.log("Break the Loop:");
      break;
    }
  }