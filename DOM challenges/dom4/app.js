const addButton = document.getElementById("addButton");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyList = document.querySelector(".empty-list");
const total = document.getElementById("totalTasks");
const completed = document.getElementById("completedTasks");

addButton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.innerHTML = input.value;

  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.classList.add("delete-button");
  li.appendChild(delBtn);

  const comBtn = document.createElement("input");
  comBtn.setAttribute("type", "checkbox");
  comBtn.classList.add("complete-button");
  li.appendChild(comBtn);

  taskList.appendChild(li);
  input.value = "";

  let eleCount = taskList.childElementCount;
  if (eleCount >= 1) {
    emptyList.remove();
  }
  eleCount = taskList.childElementCount;
  total.innerText = `Total tasks: ${eleCount}`;

  let comCount = 0;
  comBtn.addEventListener("change", function () {
    if (comBtn.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }

    let items = taskList.getElementsByTagName("input");
    for (const item of items) {
      if (item.checked) {
        comCount++;
      }
      completed.innerText = `Completed: ${comCount}`;
    }
  });

  delBtn.addEventListener("click", function () {
    li.remove();
    comCount--;
    console.log("deleted");
    const eleCount = taskList.childElementCount;
    if (eleCount <= 0) {
      taskList.appendChild(emptyList);
    }
    total.innerText = `Total tasks: ${eleCount}`;
    completed.innerText = `Completed: ${comCount}`;
  });
});
