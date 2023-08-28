
import './App.css'
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import {  useReducer, useState } from "react"
import TodoContext from './context/TodoContext';
import todoReducer from './reducers/todoReducer';
import TodoDispatchContext from './context/TodoDispatchContext';

function App() {
  // const [list,setList] = useState([
  //   {
  //      id:1, todoData: 'todo 1' , finished:false
  //   },
  //   {
  //       id:2, todoData: 'todo 2', finished:false
  //    }
  // ]);

  const [list,dispatch] =useReducer(todoReducer,[])
  return (
    
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
      <AddTodo 
      // updateList={(todo) =>{
        // dispatch({type: 'add_todo',payload:{todoText: todo}})
      // }} 
      />
      <TodoList/>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
   
  )
}

export default App
