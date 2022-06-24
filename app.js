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

let timeInterval;

function interval() {
  timeInterval = setInterval(time, 10);
}

let IsCounting = false;

if(IsCounting ? clearInterval(timeInterval) : (starter.onclick = interval);

starter.onclick = () => {
  return (interval = setInterval(time, 10));
};

reseter.onclick = () => {
  ms = 00;
  millisecond.textContent = ms;

  sc = 00;
  second.textContent = sc;

  mn = 00;
  minute.textContent = mn;

  hr = 00;
  hour.textContent = hr;

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
