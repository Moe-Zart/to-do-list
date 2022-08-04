let list = document.querySelector(".list");

let todoList = [
  {
    id: 1,
    task: "Create Your Todo List",
  },
];
let inputValue = "";
function todoInput(event) {
  inputValue = event.target.value;
}
function todoAdd() {
  todoList.push({
    id: Math.random() * 1000,
    task: inputValue,
  });
  renderTodo();
}

function todoRemove(id) {
  todoList = todoList.filter((todo) => {
    return todo.id !== id;
  });
  renderTodo();
}
renderTodo();
function renderTodo() {
  list.innerHTML = todoList
    .map(
      (todo) =>
        `<li>
        ${todo.task}
        <button class="todo__delete" onclick="todoRemove(${todo.id})">
          x
        </button>
      </li>`
    )
    .join("");
}
