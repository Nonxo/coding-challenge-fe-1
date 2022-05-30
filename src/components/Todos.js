import React from "react"
import TodoItem from "./TodoItem";

const Todos = ({ todoItems, handleToggle }) => (
    <React.Fragment>
        <ul className="todos">
            { todoItems.map((todo) => (
                <TodoItem key={todo.id} onToggle={handleToggle} todo={todo} />
            ))}
        </ul>
    </React.Fragment>
)

export default Todos