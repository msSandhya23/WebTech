let taskForm = document.getElementById("task-form");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");
let formButton = document.getElementById("form-btn");

let savedTask = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

let editIndex = null;

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let task = taskInput.value.trim();
  if (task === "") {
    alert("Please enter a task.");
    return; 
  }
  if (editIndex === null) {
    savedTask.unshift(task);
  } else {
    savedTask[editIndex] = task;
    editIndex = null;
  }
  localStorage.setItem("tasks", JSON.stringify(savedTask));

  taskInput.value = "";
  formButton.value = "Add Task";

  displayTasks();
});
function displayTasks() {
  taskList.innerHTML = "";

  savedTask.forEach((task, index) => {
    let listItem = document.createElement("li");
    listItem.className =
      "list-group-item list-group-item-secondary mb-2 d-flex justify-content-between align-items-center";

    let taskText = document.createElement("span");
    taskText.textContent = task;

    let iconSpan = document.createElement("span");
    iconSpan.className = "gap-3 d-flex";

    let deleteIcon = document.createElement("i");
    deleteIcon.className =
      "fa-solid fa-trash float-end border border-dark p-2 border-2 rounded rounded-circle";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", function () {
      removeTask(index);
    });

    let editIcon = document.createElement("i");
    editIcon.className =
      "fa-solid fa-pen-to-square float-end border border-dark p-2 border-2 rounded rounded-circle";
    editIcon.style.cursor = "pointer";
    editIcon.addEventListener("click", function () {
      editTask(index);
    });

    iconSpan.appendChild(deleteIcon);
    iconSpan.appendChild(editIcon);

    listItem.appendChild(taskText);
    listItem.appendChild(iconSpan);

    taskList.appendChild(listItem);
  });
}

function removeTask(index) {
  savedTask.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(savedTask));
  displayTasks();
}

function editTask(index) {
  taskInput.value = savedTask[index];
  editIndex = index;
  formButton.value = "Update Task";
}

displayTasks();
