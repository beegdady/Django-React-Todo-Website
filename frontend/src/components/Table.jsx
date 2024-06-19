import axios from "axios"
import { useEffect, useState } from "react"
import {FaTrash, FaEdit, FaCheckSquare, FaSquare} from "react-icons/fa"
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md"


const Table = ({todoData,currentTodo, setCurrentTodo}) => {
    
    const EditTodo = (todo) => {
        setCurrentTodo(todo)
    }

    console.log(currentTodo)
    

    return (
        <div className="h-30 overflow-y-auto">
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
                            const date = new Date(todo.created).toLocaleDateString();


                            return ( 
                                <tr key={todo.id}>
                                    {todo.completed ? <td><MdCheckBox/></td> : <td><MdCheckBoxOutlineBlank/></td> }
                                    <td>{todo.body}</td>
                                    <td>{date}</td>
                                    <td >
                                        <div className="flex gap-2 w-14 h-4 justify-center">
                                            <FaEdit onClick={() => {EditTodo(todo)}}/> 
                                            <FaTrash/>
                                        </div>
                                        
                                    </td>
                                    
                                </tr>
                        
                        )}
                    )}
                </tbody>
                
            </table>
        </div>
    )
}

export default Table ;