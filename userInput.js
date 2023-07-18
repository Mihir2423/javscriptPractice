// Repeat the things done in video 
//we can take input by user in 2 types
//1st way= Easy way with a window prompt
//let username= window.prompt ("What's your name?");
//console.log(username);
//Difficult Way Html Textbox
let username;
document.getElementById("mybutton").onclick = function(){
    username = getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = username;//innerhtml is used to change value accrding to input...........
} 