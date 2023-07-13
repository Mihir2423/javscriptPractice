// Show all the string slicing methods

// Take a string input from user

// Show its value in screen
// Show its length in a p tag in screen
// Show its value after changing it to uppercase
// Clear btn to clear everything
document.getElementById("mybutton").onclick = function(){
   let text = document.getElementById("mytext").value;
    document.getElementById("text").innerHTML = text;
}
document.getElementById("button1").onclick = function(){
    let text = document.getElementById("mytext").value;
    document.getElementById("newtext").innerHTML = "String Length:"+ text.length;
}
document.getElementById("button2").onclick = function(){
    let text = document.getElementById("mytext").value;
    document.getElementById("newtext").innerHTML = "String in uppercase:"+ text.toUpperCase();
}
document.getElementById("button3").onclick = function(){
    let text = document.getElementById("mytext").value;
    document.getElementById("newtext").innerHTML = "String in lowercase:"+ text.toLowerCase();
}
document.getElementById("button4").onclick = function(){
    document.getElementById("mytext").innerHTML = "";
    document.getElementById("newtext").innerHTML = "";
}