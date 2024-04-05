import AddTodo from './components/AddTodo'
import './App.css'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import {Store} from './app/store'
function App() {
  
  return (
    <Provider store={Store}>
      
    <div className='text-orange-700 text-center m-8 bg-slate-900 p-4 text-4xl font-bold italic'> Todo List Manager | Redux-React</div>
    <AddTodo/>
    <Todo/>
    </Provider>
  )
}

export default App
