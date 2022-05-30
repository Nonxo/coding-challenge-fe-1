import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Form from "./components/Form";

import * as todoActions from './store/todoActions';
import Todos from "./components/Todos";
import {getTodosByFilterType} from "./filterUtils";


function App () {

    const dispatch = useDispatch()
    const [todoInput, setTodoInput ] = useState("")
    const { todos, filterType } = useSelector((state) => state)

    const handleChange = (e) => {
        setTodoInput(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(todoActions.add(todoInput))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(todoActions.add(todoInput))
        }
    }

    const handleFilter = (e) => {
        const filterType = e.target.value
        dispatch(todoActions.filter(filterType))
    }
    const handleToggle = (id) => {
       dispatch(todoActions.toggle(id))
    }

    return (
        <div>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} handleKeyDown={handleKeyDown} handleFilter={handleFilter} />
            <Todos todoItems={getTodosByFilterType(todos, filterType)} handleToggle={handleToggle}/>
        </div>
    )
}

export default App
