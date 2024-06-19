import { Form, FormItem } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import axios from 'axios';



const TodoForm = ({currentTodo}) => {
    const [TodoItem, setTodoItem] = useState({
        'body' : ''
    });

    useEffect(() => {
        if (currentTodo){
            setTodoItem(currentTodo)
        }else{
            setTodoItem({
                'body' : ''
            })
        }

    }, [currentTodo])

    // console.log(TodoItem)
    console.log('currentTodo',currentTodo)


    const handletodoChange = (e) => {
        setTodoItem(prev => ({
            ...prev,
            'body' : e.target.value
        }))
    }

   

    const postTodo = async() => {
        const data = {
           ...TodoItem
        };


        const url = currentTodo ?'http://127.0.0.1:8000/api/todo/${currentTodo.id}/' : 'http://127.0.0.1:8000/api/todo/';
        const method = currentTodo ? 'put' : 'post' ;

        
        

        try{
            await axios[method](url, data);
            setTodoItem({
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
                            value ={TodoItem?.body || ''} onChange = {handletodoChange}
                        />

                    <Button onClick =  {() => postTodo()}>{
                        currentTodo && currentTodo.id ? 'Update Todo' : 'Add Todo'
                    }
                    </Button>
                       
                    </div>
                    
                </FormItem>
            </Form>
        </div>
    )
}

export default TodoForm ;