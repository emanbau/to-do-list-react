import React from 'react'
import { useState } from 'react'
import Todoform from './Todoform'

function Todolist() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    return (
        <div>
            <h1>To Do List</h1>
            <Todoform onSubmit={addTodo}/>
        </div>
    )
}

export default Todolist
