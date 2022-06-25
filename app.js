//! SELECTORS:
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

let time_interval;
let isCounting = false;

function interval() {
  time_interval = setInterval(time, 100);
}

starter.onclick = () => {
  if (isCounting) {
    clearInterval(time_interval);
    isCounting = false;
    starter.textContent = "START";
  } else {
    interval();
    isCounting = true;
    starter.textContent = "STOP";
  }
};

reseter.onclick = () => {
  ms = 000;
  sc = 00;
  mn = 00;
  hr = 00;
  millisecond.textContent = ms < 10 && "0" + ms;
  second.textContent = sc < 10 && "0" + sc;
  minute.textContent = mn < 10 && "0" + mn;
  hour.textContent = hr < 10 && "0" + hr;
  clearInterval(time_interval);
};

function time() {
  ms++;
  millisecond.textContent = ms < 10 ? "0" + ms : ms;
  if (ms == 9) {
    sc++;
    ms = 00;
    second.textContent = sc < 10 ? "0" + sc : sc;
    if (sc == 59) {
      mn++;
      sc = 00;
      minute.textContent = mn < 10 ? "0" + mn : mn;
      if (mn == 59) {
        hr++;
        mn = 00;
        hour.textContent = hr < 10 ? "0" + hr : hr;
      }
    }
  }
}
