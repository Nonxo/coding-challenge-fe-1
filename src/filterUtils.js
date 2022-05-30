export const getTodosByFilterType = (todos, filterType) => {
    if (filterType === "CLOSED") {
        return todos.filter((todo) => todo.completed)
    }
    if (filterType === "OPEN") {
        return todos.filter((todo) => !todo.completed)
    }
    return todos
}