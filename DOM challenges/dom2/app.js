const heading = document.getElementById("mainHeading");
const buttons = document.getElementById("color-buttons");
console.log(buttons);

buttons.addEventListener("click", function (event) {
  if (event.target.id !== "resetButton") {
    console.log(event.target);
    let selectedColor = event.target.id;
    selectedColor = selectedColor.split("B")[0];
    console.log(selectedColor);

    heading.style.color = selectedColor;
  } else {
    heading.style.color = "black";
  }
});
