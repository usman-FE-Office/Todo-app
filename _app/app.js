// INITAILIZE VARIABLES

const mainBody = document.querySelector("body");
const themeToggle = document.querySelector("#theme-toggle");
const formDiv = document.querySelector("#form-div");
const taskInput = document.querySelector("#task-input");
const mainSection = document.querySelector("#main-section");
const innerCircle = document.querySelectorAll(".inner-circle");
const inputCircle = document.querySelector(".inner-circle-input");
const taskItem = document.querySelectorAll(".task-item");
const taskUl = document.querySelector("#task-ul");
const itemDesc = document.querySelector(".item-desc");
const clearBtn = document.querySelector(".clear-btn");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const all = document.querySelector(".all");
const activeM = document.querySelector(".active-m");
const completedM = document.querySelector(".completed-m");
const allM = document.querySelector(".all-m");
const itemsLeft = document.querySelector(".items-left");
const mobileLinks = document.querySelector(".mobile-filters");
let li;
const taskArr = [];
let keys = [];

// TASK INPUT EVENT HANDLER
formDiv.addEventListener("submit", function (e) {
  createTaskElement(taskInput.value);
  counterItem();
  taskInput.value = "";
  keyMaker();
  localStorage.setItem("keys", JSON.stringify(keys));
  e.preventDefault();
});

// KEYMAKER FOR LOCAL STORAGE

function keyMaker() {
  keys = [];
  taskArr.forEach(function (task) {
    keys.push(task.children[1].textContent);
  });
  return keys;
}

//Get FROM LOCAL STORAGE
window.addEventListener("DOMContentLoaded", function () {
  const keys = JSON.parse(localStorage.getItem("keys"));
  if (keys != null && keys.length != 0) {
    for (const key of keys) {
      createTaskElement(key);
    }
  } else {
    localStorage.clear();
  }
  counterItem();
});

// CREATE TASK ITEM ELEMENT FUNCTION
function createTaskElement(value) {
  li = document.createElement("li");
  li.classList.add("task-item");

  mainBody.className.includes("dark-body")
    ? li.classList.add("dark-btm")
    : li.classList.add("light-btm");

  taskUl.appendChild(li);
  const divbtn = document.createElement("div");
  divbtn.classList.add("btn-block");
  li.appendChild(divbtn);
  const spanEl = document.createElement("span");
  spanEl.classList.add("inner-circle", "item-circle");

  mainBody.className.includes("dark-body")
    ? spanEl.classList.add("dark-circle")
    : spanEl.classList.add("light-circle");

  divbtn.appendChild(spanEl);
  const divDesc = document.createElement("div");
  divDesc.classList.add("item-desc");
  li.appendChild(divDesc);
  cross = document.createElement("span");
  cross.classList.add("cross");
  divDesc.appendChild(cross);

  const contentItem = document.createElement("p");
  divDesc.appendChild(contentItem);

  contentItem.textContent = value;
  taskArr.push(li);

  // INNER CIRCLE FUNCTION
  spanEl.addEventListener("click", function () {
    spanEl.classList.toggle("inner-circle-grd");
    spanEl.parentElement.parentElement.children[1].classList.toggle(
      "checked-Item"
    );
    counterItem();
  });
  // CROSS EVENT HANDLER

  cross.addEventListener("click", function (e) {
    let ind = taskArr.indexOf(e.target.parentElement.parentElement);
    taskArr.splice(ind, 1);
    counterItem();
    e.target.parentElement.parentElement.remove();
    keyMaker();
    localStorage.setItem("keys", JSON.stringify(keys));
  });
}

// Item Left Counter
function counterItem() {
  let sum = 0;
  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].children[1].className.includes("checked-Item")) continue;
    else sum++;
  }
  itemsLeft.textContent = `${sum} items left`;
}

// TOGGLE EVENT HANDLER
themeToggle.addEventListener("click", function () {
  mainBody.classList.toggle("dark-body");
  mainBody.classList.toggle("light-body");
  themeToggle.classList.toggle("light-SVG");
  themeToggle.classList.toggle("dark-SVG");
  formDiv.classList.toggle("dark");
  formDiv.classList.toggle("light");
  mobileLinks.classList.toggle("dark");
  mobileLinks.classList.toggle("light");
  taskInput.classList.toggle("light-input");
  mainSection.classList.toggle("dark");
  mainSection.classList.toggle("light");
  mainSection.classList.toggle("section-dark");
  mainSection.classList.toggle("section-light");
  inputCircle.classList.toggle("light-circle");
  inputCircle.classList.toggle("dark-circle");

  for (let i = 0; i < taskArr.length; i++) {
    if (
      taskArr[i].className.includes("dark-btm") &&
      mainBody.className.includes("dark-body")
    ) {
      taskArr[i].classList.toggle("light-btm");
      taskArr[i].classList.toggle("dark-btm");
      taskArr[i].children[0].children[0].classList.toggle("light-circle");
      taskArr[i].children[0].children[0].classList.toggle("dark-circle");
    } else {
      taskArr[i].classList.toggle("light-btm");
      taskArr[i].classList.toggle("dark-btm");
      taskArr[i].children[0].children[0].classList.toggle("light-circle");
      taskArr[i].children[0].children[0].classList.toggle("dark-circle");
    }
  }
});

// Clear Completed Function

clearBtn.addEventListener("click", function () {
  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].children[1].className.includes("checked-Item")) {
      taskArr[i].remove();
    }
  }

  const filtered = taskArr.filter(
    (single) => !single.children[1].className.includes("checked-Item")
  );
  taskArr.splice(0, taskArr.length, ...filtered);
  keyMaker();
  localStorage.setItem("keys", JSON.stringify(keys));
});

// FILTER Functions

active.addEventListener("click", function () {
  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].children[1].className.includes("checked-Item")) {
      taskArr[i].style.display = "none";
    } else {
      taskArr[i].style.display = "flex";
    }
  }
});

completed.addEventListener("click", function () {
  for (let i = 0; i < taskArr.length; i++) {
    if (!taskArr[i].children[1].className.includes("checked-Item")) {
      taskArr[i].style.display = "none";
    } else {
      taskArr[i].style.display = "flex";
    }
  }
});

all.addEventListener("click", function () {
  for (let i = 0; i < taskArr.length; i++) {
    taskArr[i].style.display = "flex";
  }
});

// FILTER Functions for mobile

activeM.addEventListener("click", function () {
  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].children[1].className.includes("checked-Item")) {
      taskArr[i].style.display = "none";
    } else {
      taskArr[i].style.display = "flex";
    }
  }
});

completedM.addEventListener("click", function () {
  for (let i = 0; i < taskArr.length; i++) {
    if (!taskArr[i].children[1].className.includes("checked-Item")) {
      taskArr[i].style.display = "none";
    } else {
      taskArr[i].style.display = "flex";
    }
  }
});

allM.addEventListener("click", function () {
  for (let i = 0; i < taskArr.length; i++) {
    taskArr[i].style.display = "flex";
  }
});

formDiv.addEventListener("submit", function () {
  const activeArr = [];
  for (let i = 0; i < taskArr.length; i++) {
    if (!taskArr[i].children[1].className.includes("checked-Item")) {
      activeArr.push(taskArr[i]);
    }
  }
});
