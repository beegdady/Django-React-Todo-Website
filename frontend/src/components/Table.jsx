import axios from "axios"
import { useEffect, useState } from "react"
import {FaTrash, FaEdit, FaCheckSquare, FaSquare} from "react-icons/fa"
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md"
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
                    {todoData && todoData.map(todo => {
                            const date = todo.created.toLocaleString().split('T')[0];


                            return ( 
                            <tr key={todo.id}>
                                {todo.completed ? <td><MdCheckBox/></td> : <td><MdCheckBoxOutlineBlank/></td> }
                                <td>{todo.body}</td>
                                <td>{date}</td>
                                <td >
                                    <div className="flex gap-2 w-14 h-4 justify-center">
                                        <FaEdit/> 
                                        <FaTrash/>
                                    </div>
                                    
                                </td>
                                
                            </tr>
                        
                        )}
                    )
                    }
                </tbody>
                
            </table>
        </div>
    )
}

export default Table ;