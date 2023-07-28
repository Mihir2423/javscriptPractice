// Implement Number Guessing game

function numberGuessingGame() {
    let minNumber = 1;
    let maxNumber = 100;
    let secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    let attempts = 0;
  
    while (true) {
      const userInput = parseInt(prompt(`Guess a number between ${minNumber} and ${maxNumber}:`));
      
      if (isNaN(userInput)) {
        alert("Invalid input! Please enter a valid number.");
        continue;
      }
      
      attempts++;
      if (userInput === secretNumber) {
        alert(`Congratulations! You guessed the correct number (${secretNumber}) in ${attempts} attempts.`);
        break;
      } else if (userInput < secretNumber) {
        alert("Too less! Try again.");
      } else {
        alert("Too high! Try again.");
      }
    }
  }
  numberGuessingGame();
  