let minTag = document.getElementById("min");
let secTag = document.getElementById("sec");
let mSecTag = document.getElementById("m-sec");

let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

let min = 0;
let sec = 0;
let mSec = 0;

let flag = null;
function stratTimer() {
  if (flag) return;
  flag = setInterval(() => {
    mSec++;
    if (mSec == 100) {
      sec++;
      mSec = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    minTag.innerText = concatZero(min);
    secTag.innerText = concatZero(sec);
    mSecTag.innerText = concatZero(mSec);
  }, 10);
}
function stopTimer() {
  clearInterval(flag);
  flag = null;
}

function resetTimer() {
  stopTimer();
  min = 0;
  sec = 0;
  mSec = 0;
  minTag.innerText = "00";
  secTag.innerText = "00";
  mSecTag.innerText = "00";
}

function concatZero(num) {
  return num < 10 ? `0${num}` : num;
}

startBtn.addEventListener("click", stratTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
