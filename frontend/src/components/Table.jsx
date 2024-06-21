import axios from "axios"
import {FaTrash, FaEdit } from "react-icons/fa"
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md"


const Table = ({todoData,currentTodo, setCurrentTodo}) => {
    
    const EditTodo = (todo) => {
        setCurrentTodo(todo)

    }

    const DeleteTodo = async(todoId) => {
        await axios.delete(`http://127.0.0.1:8000/api/todo/${todoId}/`);
        window.location.reload(true)
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
                                            <FaTrash onClick={() => DeleteTodo(todo.id)}/>
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