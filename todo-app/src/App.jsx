import { useState } from 'react'
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
  { id: 1, text: "найти подработку", status: false },
  { id: 2, text: "начать самому платить за квартиру", status: false },
  { id: 3, text: "найти девушку", status: false },
  { id: 4, text: "выучить React", status: false },
  { id: 5, text: "выучить js", status: false },
  { id: 6, text: "выучить HTML and CSS", status: false }
]);
 function addTo (text) {
  if (text.trim() === "") return 
  setTodos(...[todos,{ id: Date.now(), text: text, status: false }])
 }
  function deleteTodo(id) {
 setTodos(todos.filter(todo=> todo.id!==id))
  }
 
  return (
    <>
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Мой Список Дел</h1>
    </div>
    <TodoList todos={todos}
        addTo={addTo}
       deleteTodo ={deleteTodo}
    />
      </>
  )
}

export default App
