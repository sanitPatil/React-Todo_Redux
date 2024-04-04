import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:[
        {
        id:1,
        todo_msg:"Hello World!"
        }
    ]
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
            state.todos.map((todo)=>todo.id === action.payload.id ? todo.todo_msg=action.payload.text :todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer;