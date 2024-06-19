import axios from 'axios'

const TodoListApi = async () => {
    let data = null;
    let error = null;
    // const url = process.env.REACT_APP_API_BASE_URL ;
    // console.log(url)


    try{
        const response = await axios.get('http://127.0.0.1:8000/api/todo')
        data = response.data
        // console.log('data', data)
        

    }catch(error){
        console.error('Error fetching data:', error); 
        error = 'Failed to fetch API data';
    }
    
    return {data, error}
}
export default TodoListApi;
