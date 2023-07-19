// In html make a form containing, two input and a checkbox and a submit btn
// Inputs should take store integer
// If the checkbox is checked perform addition, else perform multiplication

document.getElementById("mybtn").onclick = function(){
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let checkbox = document.getElementById("mycheckbox");
    let result;

    if(document.getElementById("checkbox".checked)){
         result = num1 + num2;
         console.log(result);
    } 
    else {
        result = num1 * num2;
        console.log(result);
    }
}