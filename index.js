let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
displayTodo();
function addTodoItem() {
  let textElement = document.querySelector(".input-text");
  let dateElement = document.querySelector(".task-date");
  let task = textElement.value;
  let date = dateElement.value;
  if (check(task, date) == 1) {
    todoList.push({
      task,
      date,
    });
    displayTodo();
  }
  localStorage.setItem("todoList", JSON.stringify(todoList));
  textElement.value = "";
  dateElement.value = "";
}
function displayTodo() {
  let htmlElement = "";
  for (let i = 0; i < todoList.length; i++) {
    let { task, date } = todoList[i];
    let html = `<div class="todo-container">
                    <div class="todo-text">${task}</div>
                    <div class="todo-data">${date}</div>
                    <button class="todo-button" onclick="
                    todoList.splice(${i},1);
                    localStorage.setItem('todoList',JSON.stringify(todoList));
                    displayTodo();
                    ">Delete</button>
                </div>`;
    htmlElement += html;
  }
  document.querySelector(".place-todo").innerHTML = htmlElement;
}

function check(task, date) {
  if (task === "" && date === "") {
    alert("Please enter the task and Date");
  } else if (task === "") {
    alert("Please Enter the Task");
  } else if (date === "") {
    alert("Please Enter the Date");
  } else {
    return 1;
  }
  return 0;
}
