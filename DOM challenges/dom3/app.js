const namee = document.getElementById("nameInput");
const job = document.getElementById("jobInput");
const age = document.getElementById("ageInput");
const bio = document.getElementById("bioInput");
const previewCard = document.querySelector(".preview-card");

const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

namee.addEventListener("input", function (event, target) {
  nameDisplay.textContent = event.target.value;
  console.log(nameDisplay.textContent);
});

job.addEventListener("input", function (event, target) {
  jobDisplay.textContent = event.target.value;
  console.log(nameDisplay.textContent);
});

age.addEventListener("input", function (event, target) {
  ageDisplay.textContent = event.target.value;
  console.log(nameDisplay.textContent);
});

bio.addEventListener("input", function (event, target) {
  bioDisplay.textContent = event.target.value;
  console.log(nameDisplay.textContent);
});

//2nd way

// const inputs = [
//   {
//     input: document.getElementById("nameInput"),
//     display: document.getElementById("nameDisplay"),
//   },
//   {
//     input: document.getElementById("jobInput"),
//     display: document.getElementById("jobDisplay"),
//   },
//   {
//     input: document.getElementById("ageInput"),
//     display: document.getElementById("ageDisplay"),
//   },
//   {
//     input: document.getElementById("bioInput"),
//     display: document.getElementById("bioDisplay"),
//   },
// ];

// inputs.forEach(({ input, display }) => {
//   input.addEventListener("input", (event) => {
//     display.textContent = event.target.value;
//     console.log(display.textContent); // Logs the updated display content
//   });
// });

// 3rd way

// const inputMap = {
//   nameInput: "nameDisplay",
//   jobInput: "jobDisplay",
//   ageInput: "ageDisplay",
//   bioInput: "bioDisplay",
// };

// document.querySelector(".form-container").addEventListener("input", (event) => {
//   const inputId = event.target.id;
//   if (inputMap[inputId]) {
//     const display = document.getElementById(inputMap[inputId]);
//     display.textContent = event.target.value;
//     console.log(display.textContent); // Logs the updated display content
//   }
// });
