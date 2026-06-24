 
 function TodoItem ({todo}) {
    return (
<div>
    <span style= {todo.isCompleted ?  { textDecoration : "line-through"} : {}}> {todo.text}</span>
</div>
)
 }
 export default TodoItem