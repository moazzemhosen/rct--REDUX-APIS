import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addTodo, Delete, getTodo } from '../Redux/actions';

const Todo = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const {todo} = useSelector((state) => state.todos.getData);
console.log(todo);

    const ondelete=(id) => {
    //   console.log(id)  
        dispatch(Delete(id))
    }
  const handleChange = (e) => {
    let text = ref.current.value;
    // addTodo(dispatch,text)
 dispatch(addTodo(text));
    ref.current.value = "";
  };

    useEffect(() => {
        // getTodo(dispatch)
        dispatch(getTodo())
    }, [getTodo])
    
    return (
      <div>
        Todo:
        <input type="text" ref={ref} />
            <button onClick={handleChange}>Add</button>

            {todo.map((todo) => (
          <div key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.value}</Link>
            <button onClick={() => ondelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
}

export default Todo