import './App.css'
import Table from './components/Table'
import TodoForm from './components/todoForm'
import TodoListApi from "./API-INTERACTIONS/table"
import { useState, useEffect } from 'react'

function App() {
  const [todoData, setTodoData] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({});


  useEffect(() => {
      const fetchTodos = async() => {
          const result = await TodoListApi()
          setTodoData(result.data)
      } 
      
      fetchTodos()
  }
  ,[])

  return (
    <div className='bg-indigo-200 min-h-screen px-14' >
      <nav className='pt-8'>
        <h1 className='text-4xl text-center  '>Todo List</h1>
      </nav>

      <div>
        <TodoForm currentTodo={currentTodo} />
        <Table todoData = {todoData} setTodoData= {setTodoData} 
              currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}
        />
      </div>
    </div>
  )
}

export default App
