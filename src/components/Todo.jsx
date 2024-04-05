import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo, updateTodo,updateSet} from '../Features/TodoSlice';
function Todo() {
    
    const todos = useSelector(state=>state.todos);
    const displatch = useDispatch();
    // // console.log(completed);
    // console.log(update);
    
    useEffect(()=>{
      
    },[todos])
  return (
    <div className=''>
        <div className=' bg-black text-white text-2xl rounded-lg '>
          {
            
            todos.map((todo)=>(
              <div className='flex justify-between bg-gray-900 p-2 m-4 ' key={todo.id}>
              <div  className=' p-2 pb-2'>
                
              <h1 className='pl-20 text-2xl  text-center'>
                {"  "}{todo.todo_msg}</h1>
              </div>
              <div className='pr-4'>
                <button
                onClick={()=>displatch(removeTodo(todo.id))}
                className='bg-orange-700 p-2 rounded-lg hover:bg-blue-900' type='submit'>Delete</button>{"  "}
                <button 
                onClick={()=> displatch(updateSet({id:todo.id, msg:todo.todo_msg}))}
                className='bg-orange-700 p-2 rounded-lg hover:bg-blue-900' type='submit'>Update</button>
                
              </div>
              </div>
            ))
          }
    </div>
    </div>
  )
}

export default Todo