const openBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const panel = document.querySelector(".panel");
const menuItems = document.querySelectorAll(".menu-item");
const content = document.querySelector("body");

openBtn.addEventListener("click", (e) => {
  console.log("open button");
  e.stopPropagation();
  panel.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  panel.classList.remove("active");
});

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    alert(`${item.innerText} is clicked`);
  });
});

content.addEventListener("click", (e) => {
  console.log("content");
  panel.classList.remove("active");
});
