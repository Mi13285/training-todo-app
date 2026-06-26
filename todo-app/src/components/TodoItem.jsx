
 function TodoItem ({todo, deleteTodo, toggleToDo}) {
    return (
<div>
     <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => {
          toggleToDo(todo.id);
        }}
         />
    <span style= {todo.isCompleted ?  { textDecoration : "line-through"} : {}}> {todo.text}</span>
     <button onClick={() =>deleteTodo(todo.id)}> ❌</button>
</div>
)
 }
 export default TodoItem