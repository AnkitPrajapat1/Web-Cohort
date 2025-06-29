const toDo = document.getElementById("to-do");
const inProgress = document.getElementById("in-progress");
const done = document.getElementById("done");
const btn = document.getElementById("add-btn");
const openAddMondal = document.getElementById("btn");
const closeMondal = document.querySelector(".close-add-mondal");
const addMondal = document.querySelector("#add-mondal");
const taskInput = document.getElementById("add-input");
const overlay = document.querySelector(".overlay");
const delItems = document.querySelectorAll(".del-item");
const editItems = document.querySelectorAll(".edit-item");
const itemText = document.querySelectorAll(".item-text");
const editMondal = document.getElementById("edit-mondal");
const closeEditMondal = document.querySelector(".close-edit-mondal");
const openEditMondal = document.querySelector(".edit-item");
const editInput = document.getElementById("edit-input");
const editTextBtn = document.getElementById("edit-btn");
function addDrag(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("draging");
  });
  target.addEventListener("dragend", () => {
    target.classList.remove("draging");
  });
}
function addColumnDrag(target) {
  // let temp = document.createElement("div");
  // temp.classList.add("item");

  // target.addEventListener("dragenter", (e) => {
  //   e.preventDefault();
  //   // let temp = document.createElement("div");
  //   // temp.classList.add("item");
  //   // target.parentNode.insertBefore(temp, target);
  //   // target.parentNode.insertBefore(target, temp);
  //   // target.parentNode.insertBefore(temp, target.nextSibling);
  // });
  target.addEventListener("dragenter", (e) => {
    e.preventDefault();

    const draging = document.querySelector(".draging");
    console.log("draging");
    swap(draging, target);
  });

  target.addEventListener("dragover", (e) => {
    e.preventDefault();
    target.parentNode.removeChild(temp);
  });
}
function delItem(target, item) {
  target.addEventListener("click", () => {
    item.remove();
  });
}

function editBtn(target, item) {
  target.addEventListener("click", () => {
    // e.preventDefault();
    item.classList.add("editable");
    editMondal.style.display = "flex";
    editInput.value = item.innerText;
    overlay.style.display = "block";

    editTextBtn.addEventListener("click", () => {
      // e.preventDefault();
      const currentItem = document.querySelector(".editable");
      currentItem.innerText = editInput.value; //problem
      editMondal.style.display = "none";
      // editInput.value = "";
      overlay.style.display = "none";
      currentItem.classList.remove("editable");
    });
  });
}

editTextBtn.addEventListener("click", () => {
  editInput.value;
  editMondal.style.display = "none";
  // editInput.value = "";
  overlay.style.display = "none";
});

openAddMondal.addEventListener("click", () => {
  addMondal.style.display = "flex";
  overlay.style.display = "block";
});

closeMondal.addEventListener("click", () => {
  addMondal.style.display = "none";
  taskInput.value = "";
  overlay.style.display = "none";
});

closeEditMondal.addEventListener("click", () => {
  editMondal.style.display = "none";
  editInput.value = "";
  overlay.style.display = "none";
});

btn.addEventListener("click", () => {
  let input = taskInput.value;
  const addNew = document.createElement("div");

  // addNew.innerText = input;
  const itemText = document.createElement("p");
  itemText.innerText = input;
  itemText.classList.add("item-text");
  addNew.appendChild(itemText);
  const delBtn = document.createElement("span");
  delBtn.innerText = "X";
  delBtn.classList.add("del-item");
  addNew.appendChild(delBtn);

  const editTextBtn = document.createElement("span");
  editTextBtn.innerText = "🖋️";
  editTextBtn.classList.add("edit-item");
  addNew.appendChild(editTextBtn);
  editBtn(editTextBtn, itemText);

  addNew.classList.add("item");
  addNew.setAttribute("draggable", true);
  toDo.appendChild(addNew);
  taskInput.value = "";
  addDrag(addNew);
  addColumnDrag(addNew);
  delItem(delBtn, addNew);
  addMondal.style.display = "none";
  overlay.style.display = "none";
});

const boards = document.querySelectorAll(".box");
const items = document.querySelectorAll(".item");
console.log(items);

items.forEach((item) => {
  addDrag(item);
});

delItems.forEach((delBtn, index) => {
  delItem(delBtn, items[index]);
});

boards.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draging = document.querySelector(".draging");
    console.log(draging);
    console.log(board, "somthing passed");
    if (draging.parentElement !== board) board.appendChild(draging);
  });
});

items.forEach((item) => {
  addColumnDrag(item);
});

// delBtn.addEventListener("click", () => {
//   item.remove();
// });

function swap(ele1, ele2) {
  let parent = ele1.parentNode;
  let temp = document.createElement("div");
  temp.classList.add("item");
  parent.insertBefore(temp, ele1);
  parent.insertBefore(ele1, ele2);
  parent.insertBefore(ele2, temp);

  parent.removeChild(temp);
}

editItems.forEach((editItem, index) => {
  console.log(editItems);
  editBtn(editItem, itemText[index]);
});
