// Define Callback Function 
// Create a function that accept three paramter, two integers(a,b) and one callback function (display)
// Inside this function return the function with display
//Call back function== A function passed as an Argument to another function.......
sum (2 , 3 , displayconsole);

function sum(x ,y ,callBack){
    let result = x + y;
    callBack(result);
}
function displayconsole (output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("mylabel").innerHTML = output;
}





// this display function takes a single parameter and prints it