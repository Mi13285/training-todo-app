import React, { useState } from 'react';
function TodoForm ({addToDo}) {
    const [text, setText] = useState("");
    
  function handleSubmit (e) {
   e.preventDefault()
   addToDo(text)
   setText("")
  }
return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
       onChange={(e) =>{setText(e.target.value)}}
      />
      <button type="submit">Добавить</button>
    </form>
)
}
export default TodoForm