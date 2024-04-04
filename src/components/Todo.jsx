import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/TodoSlice';
function Todo() {
    const [update,setUpdate] = useState(false)
     const todos = useSelector(state=>state.todos);
    const displatch = useDispatch();
    // // console.log(completed);
    // console.log(update);
    
    useEffect(()=>{
      
    },[todos])
  return (
    <div className=' mx-32'>
        <div className=' bg-black text-center text-white text-2xl rounded-lg '>
           {
            todos.map((todo)=>(
                <div key={todo.id}>
                <h1  className='flex justify-around p-4  hover:bg-gray-900 rounded-2xl'>
                  
               {!update && <span>
                <span className='px-12'>{todo.todo_msg}</span>
               
                <button type='submit' 
                onClick={()=> {
                  displatch(removeTodo(todo.id))
                  setCompleted(false);
                }}
                className=' bg-orange-600 rounded-lg w-24 '>delete</button>{" "}
                <button type='submit' 
                onClick={()=>setUpdate((prev)=>!prev)}
                className=' bg-orange-600 rounded-lg w-24' >update</button>
                </span>
               }
                
                </h1>
                </div>
            ))
           }
    </div>
    </div>
  )
}

export default Todo