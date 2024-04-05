import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {addTodo, updateTodo} from '../Features/TodoSlice';

function AddTodo() {
    const [input,setInput] = useState("");
    const selectUpdate =useSelector(state=> state.update_val) ;
    
    console.log()
    const dispatch = useDispatch();
    const handleSave = (e)=>{
        e.preventDefault();
        console.log(input)
        dispatch(addTodo(input));
        setInput("");
    }
    const handleUpdate = (e)=>{
      e.preventDefault();
      dispatch(updateTodo({id:selectUpdate.id,text:input}));
      setInput("")
    }

    useEffect(()=>{
      if(selectUpdate.todoMsg){
        setInput(selectUpdate.todoMsg)
      }
    },[selectUpdate])
  return (
    <>
    <div className='w-full h-40  p-4 text-center'>
        <input type='text'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className='m-4 w-7/12 rounded-lg h-10 my-8 bg-gray-900 text-center text-white text-2xl hover:bg-gray-700' placeholder='Add new todos...'/>
        <button type='submit' 
        onClick={(selectUpdate.id !== null)?handleUpdate:handleSave}
        className=' rounded-md bg-black text-white text-2xl p-2 w-24 h-12 bg-gray-900 hover:bg-blue-700'>SAVE</button>
    </div>
    </>
  )
}

export default AddTodo