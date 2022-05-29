function renderApp(input, todoList) {
  return `<div>${input}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
    <input type="radio" data-element="showAllTodos" id="all" name="filterTodo" value="ALL">
    <label for="show-all">Show all</label>
    <input type="radio" data-element="showOpenTodos" id="open" name="filterTodo" value="OPEN">
    <label for="show-all">Show open</label>
    <input type="radio" data-element="showClosedTodos" id="closed" name="filterTodo" value="CLOSED">
    <label for="show-all">Show closed</label>
  </div>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}

export default (element, state) => {
  let filteredTodos;

  filteredTodos = state.todos;

  if (state.filterType === "CLOSED") {
    filteredTodos = state.todos.filter((todo) => todo.completed)
  }
  if (state.filterType === "OPEN") {
    filteredTodos = state.todos.filter((todo) => !todo.completed)
  }
  const todoItems = filteredTodos.map(renderTodoItem).join('');
  element.innerHTML = renderApp(
    renderForm(),
    renderTodos(todoItems)
  );

  let radioInput;
  if (state.filterType === 'CLOSED') {
    radioInput = document.querySelector('[data-element="showClosedTodos"]');
  } else if (state.filterType === 'OPEN') {
    radioInput = document.querySelector('[data-element="showOpenTodos"]');
  } else {
    radioInput = document.querySelector('[data-element="showAllTodos"]');
  }
  radioInput.checked = true;

}
