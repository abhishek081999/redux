
import Todo from "../Todo/Todo";


import {  useSelector } from "react-redux";
function TodoList({editTodo,deleteTodo,todoFinished }) {

  // const dispatch = useDispatch();

  const list = useSelector((state)=> state.todo.todoList)  ///callback state pass and get what you want from state
  function onFinished(todo,isFinished){
   todoFinished({todo,isFinished})
  }


  function onDelete(todo){
    deleteTodo({todo})
  }


  function onEdit(todo, todoText){
    editTodo({todo, todoText})

  }


    return(

        <div>
             {list.length>0 && 
             list.map(todo => <Todo 
                                  key={todo.id} 
                                  id={todo.id}
                                  isFinished={todo.isFinished} 
                                  todoData={todo.todoData} 
                                  changeFinished={(isFinished)=>onFinished(todo,isFinished)}
                                  onDelete={()=> onDelete(todo)}
                                  onEdit={(todoText)=>onEdit(todo, todoText)}
                                />)}
        </div>
       
    )
}

export default TodoList;