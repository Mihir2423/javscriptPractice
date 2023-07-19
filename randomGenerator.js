// Create the random numbers program

// In html
// -> 1 p tag and a btn 
// -> on clicking the btn show random number in that p tag

document.getElementById("generateRandom").onclick = function () {
    document.getElementById("p").innerHTML = Math.floor(Math.random() * 6) + 1;
}