
 function TodoItem ({todo, deleteToDo, toggleToDo}) {
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
     <button onClick={() =>deleteToDo(todo.id)}> ❌</button>
</div>
)
 }
 export default TodoItem