/**
 * Write your challenge solution here
 */
const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const bulbStatus = document.getElementById("status");
const body = document.getElementById("body");
let button;
toggleButton.addEventListener("click", () => {
  // toggleButton.style.backgroundColor = "#ffffff";

  if (!button) {
    bulb.classList.remove("off");
    button = true;
    toggleButton.textContent = "Turn Off";
    bulbStatus.textContent = "Status: ON";
    body.classList.remove("dark-mode");
  } else {
    bulb.classList.add("off");
    button = false;
    toggleButton.textContent = "Turn ON";
    bulbStatus.textContent = "Status: OFF";
    body.classList.add("dark-mode");
  }
});
