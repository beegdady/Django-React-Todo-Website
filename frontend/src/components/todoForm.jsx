import { Form, FormItem } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';


const TodoForm = () => {
    return (
        <div>
            <Form>
                <FormItem>
                    <div className='flex max-w-full items-center gap-2 mt-6 lg:w-1/2'>
                        <Input className ='border-black'/>
                        <Button>Add Todo</Button>
                    </div>
                    
                </FormItem>
            </Form>
        </div>
    )
}

export default TodoForm ;