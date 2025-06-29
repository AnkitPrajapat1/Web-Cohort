function updateClock() {
  const timeElement = document.querySelector(".digital-clock");
  const dateElement = document.querySelector(".date");
  const secondHand = document.querySelector(".second");
  const minuteHand = document.querySelector(".minute");
  const hourHand = document.querySelector(".hour");
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateElement.textContent = now.toLocaleDateString(undefined, options);
  if (seconds == 0 || minutes == 0 || hours == 0) {
    secondHand.style.transition =
      "transform 0s cubic-bezier(0.4, 2.08, 0.55, 0.44)";

    minuteHand.style.transition =
      "transform 0s cubic-bezier(0.4, 2.08, 0.55, 0.44)";

    hourHand.style.transition =
      "transform 0s cubic-bezier(0.4, 2.08, 0.55, 0.44)";
  } else {
    secondHand.style.transition =
      "transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)";
    minuteHand.style.transition =
      "transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)";
    hourHand.style.transition =
      "transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)";
  }
  secondHand.style.transform = `rotate(${(seconds * 6) % 360}deg)`;
  console.log(seconds);
  minuteHand.style.transform = `rotate(${(minutes * 6) % 360}deg)`;
  hourHand.style.transform = `rotate(${(hours * 30) % 360}deg)`;
}
updateClock();
setInterval(updateClock, 1000);
