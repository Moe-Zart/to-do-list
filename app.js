let list = document.querySelector(".list");

let todoList = [
  {
    id: 1,
    task: "hi",
  },
  {
    id: 2,
    task: "bye",
  },
];

renderTodo()
function todoTitle(event) {
    console.log(event.target.value);
}
function todoRemove(id){
   todoList= todoList.filter((todo)=> {
    return todo.id !== id})
    renderTodo()
}

function renderTodo() {
  list.innerHTML = todoList.map((todo) => 
    `<li>
        ${todo.task}
        <button class="todo__delete" onclick="todoRemove(${todo.id})">
          x
        </button>
      </li>`
  ).join('');
}