// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  //Create a Todo Div using createElement property
  const todoDiv = document.createElement("div");
  // Add class to element using classList.add Property
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  // appendChild is used to create and add a text node at the end of the list of child nodes.
  todoDiv.appendChild(newTodo);
  // Check Mark Button
  const completedButton = document.createElement("button");
  // innerHTML is used to get or set the html content of an element node.
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  // APPEND TO LIST
  todoList.appendChild(todoDiv);
  // Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  // event.target property will returns the element that triggeres the event.
  const item = e.target;
  // Delete Todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    //   Fall Animation
    todo.classList.add("fall");
    //   transitioned event is fired when a CSS Transition has Completed.
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
