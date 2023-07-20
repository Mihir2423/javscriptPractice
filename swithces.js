// create a variable to store a number between 0 - 31

// Create a switch statement to determine which day of the month it is, 
// if the first day of month was Monday
const randomdate = Math.floor(Math.random() * 32);
const dayofmonth = randomdate;
let dayofweek = (dayofmonth - 1) % 7;

switch (dayofweek) {
    case 0:
      console.log("The day of the month is Monday.");
      break;
    case 1:
      console.log("The day of the month is Tuesday.");
      break;
    case 2:
      console.log("The day of the month is Wednesday.");
      break;
    case 3:
      console.log("The day of the month is Thursday.");
      break;
    case 4:
      console.log("The day of the month is Friday.");
      break;
    case 5:
      console.log("The day of the month is Saturday.");
      break;
    case 6:
      console.log("The day of the month is Sunday.");
      break;
    default:
      console.log("Invalid day of the month provided.");
      break;
  }