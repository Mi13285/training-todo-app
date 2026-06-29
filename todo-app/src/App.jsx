import { useState } from 'react'
 import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
// import './App.css'

function App() {
  const [todos, setTodos] = useState([
  { id: 1, text: "найти подработку", isCompleted: false },
  { id: 2, text: "начать самому платить за квартиру", isCompleted: false },
  { id: 3, text: "найти девушку", isCompleted: false },
  { id: 4, text: "выучить React", isCompleted: false },
  { id: 5, text: "выучить js", isCompleted: false },
  { id: 6, text: "выучить HTML and CSS", isCompleted: true }
]);
const [filter, setFilter] = useState('all');
function filterStatus(status) {
  setFilter(status); 
}
 function addToDo (text) {
  console.log("Сигнал дошел! Текст из формы:", text);
 if (text.trim().length <= 3) {
  return;
}
const checkAll = text.split('').every(char => char === text[0]);
if (checkAll) {
  return;
}
  setTodos([...todos,{ id: Date.now(), text: text, isCompleted:false }])
 }
function toggleToDo(id) {
  setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
}



  function deleteToDo(id) {
 setTodos(todos.filter(todo=> todo.id!==id))
  }
 
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'active') return !todo.isCompleted;
    return true;
  });
  return (
    <div className="main-container">
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Мой Список Дел</h1>
      <TodoForm addToDo={addToDo} />
      <div className="filter-buttons" style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        <button onClick={() => filterStatus('all')}>Все</button>
        <button onClick={() => filterStatus('active')}>Активные</button>
        <button onClick={() => filterStatus('completed')}>Выполненные</button>
        </div>
        <div className="todo-counter" style={{ padding: '0 20px', marginBottom: '10px', fontSize: '14px', color: '#666' }}>
      Показано задач: <strong>{filteredTodos.length}</strong>
    </div>
    </div>
    <TodoList todos={filteredTodos}
        addToDo={addToDo}
       deleteToDo ={deleteToDo}
       toggleToDo={toggleToDo}
    />
      </div>
  )
}

export default App
