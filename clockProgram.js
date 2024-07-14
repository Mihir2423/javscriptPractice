let myLabel = document.getElementById("mylabel");

update();
setInterval(update , 1000);

function update() {
    let date = new Date();
  function formatTime (date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;
    console.log(hours, minutes , seconds);

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }
  console.log(formatTime(date));
  myLabel.innerText = formatTime(date);
  
  
  function formatZeroes(time){
    time = time.toString();
    return time.length < 2 ? "0" + time : time ;

  }
}
