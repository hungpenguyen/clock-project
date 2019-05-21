const secondHand = document.querySelector('#secondHand');
const minuteHand = document.querySelector('#minuteHand');
const hourHand = document.querySelector('#hourHand');





// Interval to refresh func code every second (in terms of ms).
setInterval(clock, 1000);

function clock () {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hr = date.getHours();

//get position of each hand
let hrPosition = ((hr/12)*360) - 90;
let minPosition = (min*360/60) - 90;
let secPosition = (360/60 * sec) - 90;
// secondHand.style.transform = 'rotate'secPosition
secondHand.style.transform = `rotate(${secPosition}deg)`;
minuteHand.style.transform = `rotate(${minPosition}deg)`;
hourHand.style.transform = `rotate(${hrPosition}deg)`;

}
