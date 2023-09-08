// Create an array
// and iterate through it using map function
// to create another array containing the square of each element
// but using the array function
const originalArray = [1, 2, 3, 4, 5]
const squaredArray = originalArray.map((element) => element * element);
// At last loop through the newly created array and print its value using forEach and arrow function
squaredArray.forEach((value) => {
    console.log(value);
});