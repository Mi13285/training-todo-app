import { useState } from 'react'
 import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
  { id: 1, text: "найти подработку", completed: false },
  { id: 2, text: "начать самому платить за квартиру", completed: false },
  { id: 3, text: "найти девушку", completed: false },
  { id: 4, text: "выучить React", completed: false },
  { id: 5, text: "выучить js", completed: false },
  { id: 6, text: "выучить HTML and CSS", completed: false }
]);
 function addToDo (text) {
  console.log("Сигнал дошел! Текст из формы:", text);
  if (text.trim() === "") return 
  setTodos([...todos,{ id: Date.now(), text: text, completed:false }])
 }
  

function toggleToDo(id) {
  setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
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
       toggleToDo={toggleToDo}
    />
      </>
  )
}

export default App
