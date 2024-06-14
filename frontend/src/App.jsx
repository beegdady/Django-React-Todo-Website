import './App.css'
import Table from './components/Table'
import TodoForm from './components/todoForm'

function App() {
  

  return (
    <div className='bg-indigo-200 min-h-screen px-14' >
      <nav className='pt-8'>
        <h1 className='text-4xl text-center  '>Todo List</h1>
      </nav>

      <div>
        <TodoForm/>
        <Table/>
      </div>
    </div>
  )
}

export default App
