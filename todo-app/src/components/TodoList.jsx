 import React, { useState } from 'react';
 import TodoItem from "./TodoItem";
 import '../App.css'
function TodoList ({todos, deleteToDo, toggleToDo}) {
 const [sortBy, setSortBy] = useState("input");

  if (sortBy === "active") {
    todos = todos
      .slice()
      .sort((a, b) => a.text.localeCompare(b.text));
  }
    return (
      <div>
    <ul className="todo-ul">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteToDo={deleteToDo} 
          toggleToDo={toggleToDo} 
        />
      ))}
    </ul>
    <button  className="sort-button"
     onClick={() => setSortBy(sortBy === "input" ? "active" : "input")}>
        Сортировка: {sortBy === "input" ? "По порядку" : "По алфавиту"}
      </button>
     </div>
  );
}
export default TodoList