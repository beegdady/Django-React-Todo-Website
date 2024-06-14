import axios from "axios"
import { useEffect, useState } from "react"
import {FaTrash, FaEdit} from "react-icons/fa"

const Table = () => {
    const [todoData, setTodoData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/todo').then(
        response => {
            setTodoData(response.data)
        }
    ).catch(
        (error) => {
            console.log('error')
        }
    )
    }
    ,[])

    console.log(todoData)
    

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