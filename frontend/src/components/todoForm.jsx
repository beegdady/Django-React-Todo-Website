import { Form, FormItem } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import axios from 'axios';



const TodoForm = () => {
    const [newTodo, setNewTodo] = useState({
        'body' : ''
    })


    const handletodoChange = (e) => {
        setNewTodo(prev => ({
            ...prev,
            'body' : e.target.value
        }))
    }

    console.log('todo', newTodo)

    const postTodo = async() => {

        const data = {
            'body' : newTodo.body,
            'completed' : false,
            'created' : new Date().toISOString()
        };

        

        try{
            await axios.post('http://127.0.0.1:8000/api/todo/', data);
            setNewTodo({
                'body' : ''
            })
        }catch(error){
            console.log(error)
        }
    }



    return (
        <div>
            <Form>
                <FormItem>
                    <div className='flex max-w-full items-center gap-2 mt-6 lg:w-1/2'>
                        <Input className ='border-black bg-white' 
                            value ={newTodo.body} onChange = {handletodoChange}
                        />
                        <Button onClick =  {() => postTodo()}>Add Todo</Button>
                    </div>
                    
                </FormItem>
            </Form>
        </div>
    )
}

export default TodoForm ;