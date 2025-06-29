const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const complementaryContainer = document.getElementById(
  "complementaryContainer"
);
const saveMsg = document.getElementById("saved");
const saveColorButton = document.getElementById("saveColorButton");
const favoriteContainer = document.getElementById("favoritesContainer");

function updateColorDisplay(color) {
  colorCode.textContent = color;
  colorCode.style.color = color;
}

function showComplementoryColors(color) {
  const base = parseInt(color.slice(1), 16);
  const compliment = (0xffffff ^ base).toString(16).padStart(6, "0");
  const complementcolor = `#${compliment}`;
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = complementcolor;
  complementaryContainer.innerHTML = "";
  complementaryContainer.appendChild(colorBox);
}
colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  updateColorDisplay(selectedColor);
  showComplementoryColors(selectedColor);
});

copyButton.addEventListener("click", () => {
  console.log("fire");
  navigator.clipboard
    .writeText(colorCode.textContent)
    .then(() => {
      saveMsg.style.backgroundColor = "yellow";
      saveMsg.textContent = `Saved ${colorCode.textContent}`;

      saveMsg.style.scale = 1;

      setTimeout(() => {
        saveMsg.style.scale = 0;
      }, 2 * 1000);
    })
    .catch((err) => {
      saveMsg.style.backgroundColor = "red";
      saveMsg.style.scale = 1;
      setTimeout(() => {
        saveMsg.style.scale = 0;
      }, 2 * 1000);
      saveMsg.textContent = "Error";
      console.log("Failed to copy",err)
    });
});

saveColorButton.addEventListener("click",()=>{
    const color = colorCode.textContent
    addFavouriteColor(color)
})

function addFavouriteColor(color){
  const colorBox= document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor=color;
  favoriteContainer.appendChild(colorBox)
}