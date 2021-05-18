// INITAILIZE VARIABLES

const mainBody = document.querySelector('body');
const themeToggle = document.querySelector('#theme-toggle');
const formDiv = document.querySelector('#form-div');
const taskInput = document.querySelector('#task-input');


themeToggle.addEventListener('click', function(){
    mainBody.classList.toggle('dark-body');
    mainBody.classList.toggle('light-body');
    themeToggle.classList.toggle('light-SVG');
    themeToggle.classList.toggle('dark-SVG');
    formDiv.classList.toggle('dark');
    formDiv.classList.toggle('light');
    taskInput.classList.toggle('light-input');
    document.querySelector('.inner-circle').classList.toggle('dark-circle');
    document.querySelector('.inner-circle').classList.toggle('light-circle');
})
