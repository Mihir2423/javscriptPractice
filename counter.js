// Create the counter program, as shown in video (without cheating)
let count = 0;

document.getElementById("decreasebutton").onclick = function(){
count -= 1;
document.getElementById("countervalue").innerHTML = count;
}

document.getElementById("resetbutton").onclick = function(){
    count = 0;
document.getElementById("countervalue").innerHTML = count;
    
}

document.getElementById("increasebutton").onclick = function(){
    count += 1;
document.getElementById("countervalue").innerHTML = count;
    
}
// In html u should have
// a h1 tag to show the counter value
// three btns : decrease | reset | increase
