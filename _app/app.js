// INITAILIZE VARIABLES

const mainBody = document.querySelector("body");
const themeToggle = document.querySelector("#theme-toggle");
const formDiv = document.querySelector("#form-div");
const taskInput = document.querySelector("#task-input");
const mainSection = document.querySelector("#main-section");
const innerCircle = document.querySelectorAll(".inner-circle");
const taskItem = document.querySelectorAll('.task-item');
const onlyItemCircle = document.querySelectorAll('.item-circle')


// Create Check Element
const check = document.createElement("img");
check.src = '../images/icon-check.svg';
check.classList.add('check');


// INNER CIRCLE WORK
onlyItemCircle.forEach(function (inner) {
  inner.addEventListener('click', function () {
    inner.classList.toggle('inner-circle-grd');
    if (!inner.contains(check)) {
      inner.appendChild(check);
    } else {
      check.remove();
    }
    inner.parentElement.parentElement.children[1].classList.toggle('checked-Item');
  });
});

// Added 'dark-btn' class dynamically
for (let i = 0; i < taskItem.length; i++) {
  taskItem[i].classList.add('dark-btm');
};

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
