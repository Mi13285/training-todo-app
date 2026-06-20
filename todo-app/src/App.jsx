import { useState } from 'react'
 import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
  { id: 1, text: "найти подработку", status: false },
  { id: 2, text: "начать самому платить за квартиру", status: false },
  { id: 3, text: "найти девушку", status: false },
  { id: 4, text: "выучить React", status: false },
  { id: 5, text: "выучить js", status: false },
  { id: 6, text: "выучить HTML and CSS", status: false }
]);
 function addToDo (text) {
  if (text.trim() === "") return 
  setTodos(...[todos,{ id: Date.now(), text: text, status: false }])
 }
  function toggleTodo(id) {
   setTodos(todos.map((todo)=>{
    if (todo.id=== id) {
      return  { ...todo, completed: !todo.completed }
   }
   return todo
   })
   )
  }
  function deleteTodo(id) {
 setTodos(todos.filter(todo=> todo.id!==id))
  }
 
  return (
    <>
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Мой Список Дел</h1>
      <TodoForm addToDo={addToDo} />
    </div>
    <TodoList todos={todos}
        addToDo={addToDo}
       deleteTodo ={deleteTodo}
    />
      </>
  )
}

export default App
