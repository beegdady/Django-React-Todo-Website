import axios from "axios"
import { useEffect, useState } from "react"
import {FaTrash, FaEdit} from "react-icons/fa"
import TodoListApi from "../API-INTERACTIONS/table"

const Table = () => {
    const [todoData, setTodoData] = useState([])

    useEffect(() => {
       const fetchTodos = async() => {
            const result = await TodoListApi()
            setTodoData(result.data)
       } 

       fetchTodos()
    }
    ,[])

    // console.log(todoData)
    

    return (
        <div>
            <table className="todo-list-table">
                <thead >
                    <tr>
                        <th>Completed</th>
                        <th>Todo Info</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {todoData && todoData.map(todo => (
                            


                            <tr key={todo.id}>
                                <td>{todo.completed.toString()}</td>
                                <td>{todo.body}</td>
                                <td>{todo.created}</td>
                                <td >
                                    <div className="flex gap-2 w-14 h-4 justify-center">
                                        <FaEdit/> 
                                        <FaTrash/>
                                    </div>
                                    
                                </td>
                                
                            </tr>
                        
                        ))
                    }
                </tbody>
                
            </table>
        </div>
    )
}

export default Table ;