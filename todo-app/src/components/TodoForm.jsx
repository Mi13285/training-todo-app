import React, { useState } from 'react';
function TodoForm ({addToDo}) {
    const [input, setInput] = useState("");
    
  function handleSubmit (e) {
    if (!input.trim()) return;
   e.preventDefault()
   addToDo(input)
   setInput("")
  }
return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Item..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit">Добавить</button>
    </form>
)
}
export default TodoForm