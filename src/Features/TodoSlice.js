import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[
        {
        id:1,
        todo_msg:"Hello World!"
        }
    ],
    update_val:{
        id:null,
        todoMsg:null
    }
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                todo_msg:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
           state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            console.log(action.payload.text)
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, todo_msg:action.payload.text}:todo)
            state.update_val.id=null
            state.update_val.todoMsg=null
        
        },
        updateSet:(state,action)=>{
            state.update_val.id=action.payload.id;
            state.update_val.todoMsg=action.payload.msg;
            //console.log(state.update_val.id)
            
            
        }
        
    }
})

export const {addTodo,removeTodo,updateTodo,updateSet} = todoSlice.actions
export default todoSlice.reducer;