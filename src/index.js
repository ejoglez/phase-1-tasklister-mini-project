// create variables for elements we will interact with
const taskList = document.getElementById('tasks');
const taskInput = document.getElementById('new-task-description');
const taskForm = document.querySelector('form');
const taskLevel = document.getElementById('taskPriority');

//add event listener to form
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createToDo();
  taskForm.reset();
})

function createToDo(){
  // create a new DOM element to insert the users input
  const newTask = document.createElement('li');
  newTask.className = taskLevel.value;

  //button to remove said task
  const delBtn = document.createElement('button');
  delBtn.textContent = ' x ';
  delBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });

  // add users input into the new element
  newTask.textContent = taskInput.value;

  // attach to DOM
  taskList.appendChild(newTask);
  newTask.append(delBtn);
}

