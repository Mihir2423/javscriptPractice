// Implement temp conversion program
function convertTemperature() {
    let temperature = parseFloat(document.getElementById("tempInput").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let result = "";

    if (isNaN(temperature)) {
        document.getElementById("result").innerText = "Please enter a valid temperature.";
        return;
    }
    switch (fromUnit) {
        case "celsius":
            result += `${temperature} °C is equal to:\n`;
            result += `${(temperature * 9/5) + 32} °F\n`;
            result += `${temperature + 273.15} K`;
            break;
        case "fahrenheit":
            result += `${temperature} °F is equal to:\n`;
            result += `${(temperature - 32) * 5/9} °C\n`;
            result += `${(temperature - 32) * 5/9 + 273.15} K`;
            break;
        case "kelvin":
            result += `${temperature} K is equal to:\n`;
            result += `${temperature - 273.15} °C\n`;
            result += `${(temperature - 273.15) * 9/5 + 32} °F`;
            break;
    }
    document.getElementById("result").innerText = result;
}






//Arrays 
//  fruits.push("mango");    add an element
//  fruits.pop();      remove last element
//  fruits.unshift("apple");   add element to begining
//  fruits.shift();    removes element from begining