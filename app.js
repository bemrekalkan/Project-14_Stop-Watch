//! SELECTORS:
let timer = document.querySelector(".timer");
let starter = document.querySelector(".starter");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let millisecond = document.querySelector(".millisecond");

let hr = 00;
let mn = 00;
let sc = 00;
let ms = 00;

starter.onclick = () => setInterval(time, 10);

reset.onclick = () => {
  ms = 00;
  sc = 00;
  mn = 00;
  hr = 00;
  clearInterval(setInterval(time, 10));
};

// setInterval(time, 10);
// clearInterval(time);

function time() {
  ms++;
  millisecond.textContent = ms;
  if (ms == 1000) {
    ms = 00;
    sc++;
    second.textContent = ms;
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
