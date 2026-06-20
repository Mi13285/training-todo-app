 import React from "react";
 import TodoItem from "./TodoItem";
function TodoList ({todos, deleteTodo, toggleTodo}) {
    return(
        <ul>
            {todos.map(todo=>(
                <li key={todo.id}>
                    {todo.text}
                    <TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                </li>
                ))}
        </ul>
    )
}

export default TodoList