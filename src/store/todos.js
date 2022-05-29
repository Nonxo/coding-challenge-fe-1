const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  }
};

export const initialState = {
  filterType: "ALL",
  todos: [
    {
      id: uniqueId.get(),
      title: 'JS-101',
      completed: true
    },
    {
      id: uniqueId.get(),
      title: 'JS-102',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-201',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-202',
      completed: false
    }
  ]
};

const todoReducer =  (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD':
    return {
      ...state,
        todos: [...state.todos.push({
          id: uniqueId.get(),
          title: action.title,
          completed: false
        })],
      filterType: action.title
    }
    case 'TOGGLE':
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.id) {
              todo.completed = !todo.completed
            }
            return todo
          })
        ],
        filterType: action.id
      }
    case 'FILTER':
      return {
        ...state,
        filterType: action.filterType
      }

  }
  return state
}

export default todoReducer;
