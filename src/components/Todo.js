import React from 'react'

function Todo({todos, completeTodo, removeTodo}) {

    return todos.map((todo, index) => (
        <div className = {todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="close">
                <button onClick={() => removeTodo(todo.id)} >
                    X
                </button>
            </div>
        </div>
    ));
}

export default Todo
