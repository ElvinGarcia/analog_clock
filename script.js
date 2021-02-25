const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPositon = 20;
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock(){
  hrPositon   = hrPositon +(3/360);
  minPosition = minPosition +(6/60);
  secPosition = secPosition +6;


HOURHAND.style.transform = "rotate("+ hrPositon + "deg)";
MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)";
SECONDHAND.style.transform = "rotate("+ secPosition + "deg)";
}

const Interval = setInterval(runTheClock, 1000);