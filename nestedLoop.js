// In html take two integer input in form of type text and convert it's value into Number using js
// First input means no. of rows and second means no. of columns
// create a p tag with some id
// and finally a submit btn, on clicking it : generate the following pattern based on input

// eg output : 
//              *
//              * *
//              * * * 
//              * * * *

document.getElementById("mybutton").onclick = function(){
    let rows = Number(document.getElementById("mytext").value);
    let columns = Number(document.getElementById("text").value);
    let output = document.getElementById("newtext");
    let pattern = "";

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i && j <= columns; j++) {
            pattern += '*';
        }
        pattern += '<br>';
    }
    output.innerHTML = pattern;
}
