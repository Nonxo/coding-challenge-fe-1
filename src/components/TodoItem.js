import React from "react";

const TodoItem = ({todo, onToggle}) => {
    const className = todo.completed ? 'todos__item todos__item_checked' : 'todos__item'
    return (
        <React.Fragment>
            <li className={className}>
                <input type="checkbox" onChange={() => onToggle(todo.id)} defaultChecked={todo.completed}/>
                {todo.title}
            </li>
        </React.Fragment>
    )
}

export default TodoItem;