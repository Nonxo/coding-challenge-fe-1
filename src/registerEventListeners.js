import store from './store';
import * as todoActions from './store/todoActions';

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, e => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

addListener('click', '[data-element="addTodoButton"]', () => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  store.dispatch(todoActions.add(todoInput.value));
});

addListener('keypress', '[data-element="addTodoInput"]', (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    const todoInput = document.querySelector('[data-element="addTodoInput"]');
    store.dispatch(todoActions.add(todoInput.value));
  }
})

addListener('click', '[data-element="toggleTodo"]', e => {
  const id = Number(e.target.dataset.id);
  store.dispatch(todoActions.toggle(id));
});

const handleFilter = (e) => {
  const filterType = e.target.value
  store.dispatch(todoActions.filter(filterType))
}

addListener('click', '[data-element="showAllTodos"]', handleFilter)
addListener('click', '[data-element="showOpenTodos"]', handleFilter)
addListener('click', '[data-element="showClosedTodos"]', handleFilter)
