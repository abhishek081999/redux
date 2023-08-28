
import './App.css'
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { addTodo,editTodo,deleteTodo,todoFinished } from './actions/todoActions';
import {addTodo,editTodo,deleteTodo,todoFinished} from './slices/todoSlice';
function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({addTodo,editTodo,deleteTodo,todoFinished},dispatch)
  // const [list,setList] = useState([
  //   {
  //      id:1, todoData: 'todo 1' , finished:false
  //   },
  //   {
  //       id:2, todoData: 'todo 2', finished:false
  //    }
  // ]);

  return (
    
    <>
      <AddTodo addTodo={actions.addTodo}
      // updateList={(todo) =>{
        // dispatch({type: 'add_todo',payload:{todoText: todo}})
      // }} 
      />
      <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}/>
    </>
   
  )
}

export default App
