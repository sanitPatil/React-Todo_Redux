import { useState } from 'react'
import AddTodo from './components/AddTodo'
import './App.css'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import {Store} from './app/store'
function App() {
  
  return (
    <Provider store={Store}>
    <AddTodo/>
    <Todo/>
    </Provider>
  )
}

export default App
