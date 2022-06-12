import axios from 'axios'
import { ADD_TODO, GET_TODO} from './actions.types'

export const getTodo=()=> (dispatch) => {

    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
          dispatch({ type: GET_TODO, payload: res.data});
        //   console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
}

export const addTodo = (payload) => (dispatch) => {
    
    let data = { value: payload, isComplete: false };
    axios.post("http://localhost:8080/todos", data).then(res => {
        console.log(res)
        dispatch({ type: ADD_TODO, payload: res.data })
         

    }).catch(() => {
    
    })
}

export const Delete = (id) => (dispatch) => {
    console.log(id);
    axios
        .delete(`http://localhost:8080/todos/${id}`)
        .then((res) => {
            console.log(res)
            dispatch(getTodo());
        })
      
  
      ();
}