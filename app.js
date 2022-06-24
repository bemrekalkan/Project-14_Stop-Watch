//! SELECTORS:
let timer = document.querySelector(".timer");
let starter = document.querySelector(".starter");
let reseter = document.querySelector(".reseter");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let millisecond = document.querySelector(".millisecond");

//! VARIABLES:
let ms = 00;
let sc = 00;
let mn = 00;
let hr = 00;

let interval;

// function interval() {
//     interval = setInterval(time, 10)
// }

// starter.onclick = interval;

starter.onclick = () => {
  return (interval = setInterval(time, 10));
};

// setInterval(time, 10);
reseter.onclick = () => {
  ms = 00;
  sc = 00;
  mn = 00;
  hr = 00;
  clearInterval(interval);
};

function time() {
  ms++;
  millisecond.textContent = ms;
  if (ms == 1000) {
    ms = 00;
    sc++;
    second.textContent = sc;
    if (sc == 60) {
      sc = 00;
      mn++;
      minute.textContent = mn;
      if (mn == 60) {
        mn = 00;
        hr++;
        hour.textContent = hr;
      }
    }
  }
}
