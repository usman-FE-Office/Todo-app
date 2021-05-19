// INITAILIZE VARIABLES

const mainBody = document.querySelector("body");
const themeToggle = document.querySelector("#theme-toggle");
const formDiv = document.querySelector("#form-div");
const taskInput = document.querySelector("#task-input");
const mainSection = document.querySelector("#main-section");
const innerCircle = document.querySelectorAll(".inner-circle");
const taskItem = document.querySelectorAll(".task-item");
const onlyItemCircle = document.querySelectorAll(".item-circle");
const taskUl = document.querySelector("#task-ul");

// TASK INPUT EVENT HANDLER
formDiv.addEventListener("submit", function (e) {
  createTaskElement();
  taskInput.value = "";
  e.preventDefault();
});

// CREATE TASK ITEM ELEMENT FUNCTION
function createTaskElement() {
  const li = document.createElement("li");
  li.classList.add("task-item", "dark-btm");
  taskUl.appendChild(li);
  const divbtn = document.createElement("div");
  divbtn.classList.add("btn-block");
  li.appendChild(divbtn);
  const spanEl = document.createElement("span");
  spanEl.classList.add("inner-circle", "dark-circle", "item-circle");
  divbtn.appendChild(spanEl);
  const divDesc = document.createElement("div");
  divDesc.classList.add("item-desc");
  li.appendChild(divDesc);
  divDesc.textContent = taskInput.value;
  

  // INNER CIRCLE FUNCTION
  spanEl.addEventListener("click", function () {
    spanEl.classList.toggle("inner-circle-grd");
    spanEl.parentElement.parentElement.children[1].classList.toggle(
      "checked-Item"
    );

  });
}

// TOGGLE EVENT HANDLER
themeToggle.addEventListener("click", function () {
  mainBody.classList.toggle("dark-body");
  mainBody.classList.toggle("light-body");
  themeToggle.classList.toggle("light-SVG");
  themeToggle.classList.toggle("dark-SVG");
  formDiv.classList.toggle("dark");
  formDiv.classList.toggle("light");
  taskInput.classList.toggle("light-input");
  mainSection.classList.toggle("dark");
  mainSection.classList.toggle("light");
  mainSection.classList.toggle("section-dark");
  mainSection.classList.toggle("section-light");

  innerCircle.forEach(function (circle) {
    circle.classList.toggle("dark-circle");
    circle.classList.toggle("light-circle");
  });
  taskItem.forEach(function (item) {
    item.classList.toggle("light-btm");
    item.classList.toggle("dark-btm");
  });
});