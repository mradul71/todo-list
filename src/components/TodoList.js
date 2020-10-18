import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {

    const arra = [];
    const [todos, setTodos] = useState(arra);

    const addTodo = (todo) => {
        if(!todo.text){
            return ;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        localStorage.getItem('arr', todos);
        console.log(...todos)
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
        localStorage.getItem('arr', todos);
    }

    const removeTodo = (id) => {
        let updatedTodos = todos.filter(todo => todo.id!==id);
        setTodos(updatedTodos);
        localStorage.setItem('data', todos);
    }

    
    return (
        <div>
            <h1>todo</h1>
            <TodoForm onsubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoList
