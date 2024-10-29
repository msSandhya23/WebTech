let minTag = document.getElementById("min");
let secTag = document.getElementById("sec");
let mSecTag = document.getElementById("m-sec");

let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

let min = Number(minTag.innerText);
let sec = Number(secTag.innerText);
let mSec = Number(mSecTag.innerText);

let tempMin = min;
let tempSec = sec;
let tempMSec = mSec;

let flag = null;
function stratTimer() {
  if (flag) return;
  flag = setInterval(() => {
    if (min === 0 && sec === 0 && mSec === 0) {
      stopTimer();
      alert("Time is up ⚠️⚠️⚠️");
      return;
    }
    mSec--;
    if (mSec < 0) {
      mSec = 99;
      sec--;
    }
    if (sec < 0) {
      sec = 59;
      min--;
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
  min = tempMin;
  sec = tempSec;
  mSec = tempMSec;
  minTag.innerText = concatZero(min);
  secTag.innerText = concatZero(sec);
  mSecTag.innerText = concatZero(mSec);
}

function concatZero(num) {
  return num < 10 ? `0${num}` : num;
}

startBtn.addEventListener("click", stratTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
