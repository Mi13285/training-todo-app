 import React from "react";
 import TodoItem from "./TodoItem";
function TodoList ({todos, deleteToDo, toggleToDo}) {
    return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteToDo={deleteToDo} 
          toggleToDo={toggleToDo} 
        />
      ))}
    </ul>
  );
}
export default TodoList