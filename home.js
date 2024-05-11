let displaytimer = document.querySelector(".display-timer");
let laplist = document.querySelector(".laplist");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let lapTime = 0;
let lapcount = 0;

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const lap = document.querySelector("#lap");
stop.classList.add("display");
reset.classList.add("display");
lap.disabled = true;

start.addEventListener("click", () => {
  start.classList.add("display");
  stop.classList.remove("display");
  reset.classList.add("display");
  lap.classList.remove("display");
  lap.disabled = false;

  startTime = Date.now() - elapsedTime;
  timer = setInterval(update, 10);
});
stop.addEventListener("click", () => {
  stop.classList.add("display");
  start.classList.remove("display");
  reset.classList.remove("display");
  lap.classList.add("display");

  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
});

reset.addEventListener("click", () => {
  lap.classList.remove("display");
  reset.classList.add("display");
  lap.disabled = true;
  startTime = 0;
  elapsedTime = 0;
  displaytimer.innerHTML = "00 : 00 : 00 : 00";
  lapcount = 0;
  lapTime = 0;
  laplist.innerHTML = null;
});

lap.addEventListener("click", () => {
  ++lapcount;
  const currentTime = Date.now();
  elapsedTime = currentTime - (lapTime || startTime);

  let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let second = Math.floor((elapsedTime / 1000) % 60);
  let millisecond = Math.floor((elapsedTime % 1000) / 10);

  hour = String(hour).padStart(2, "0");
  minute = String(minute).padStart(2, "0");
  second = String(second).padStart(2, "0");
  millisecond = String(millisecond).padStart(2, "0");

  const lapElement = document.createElement("br");
  laplist.innerHTML =
    laplist.innerHTML +
    `Lap ${lapcount} : ${hour} : ${minute} : ${second} : ${millisecond}`;
  laplist.appendChild(lapElement);
});

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let second = Math.floor((elapsedTime / 1000) % 60);
  let millisecond = Math.floor((elapsedTime % 1000) / 10);

  hour = String(hour).padStart(2, "0");
  minute = String(minute).padStart(2, "0");
  second = String(second).padStart(2, "0");
  millisecond = String(millisecond).padStart(2, "0");

  displaytimer.textContent = `${hour} : ${minute} : ${second} : ${millisecond}`;
}

function showlap() {}
