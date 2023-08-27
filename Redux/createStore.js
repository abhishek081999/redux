 import { createStore,bindActionCreators } from "redux";
// const initialState = {value: 0};

// const reducer = (state, actions) => { // this reducer actually doesnt do anything
//     return state;
// }

// const store = createStore(reducer, initialState);
// console.log(store); // doing this you can see 4 functions inside the store

const ADD_TODO = 'add_todo';
const DEL_TODO ='del_todo';
const EDIT_TODO ='edit_todo'
function todoReducer(state, action){
    if(action.type == 'add_todo'){
    const todoText = action.payload.todoText;

     return[
        ...state,{text:todoText, isFinished:false, id:(state.length ==0)? 1: state[state.length - 1].id + 1}
     ]
   } else if(action.type =='edit_todo'){
    let todo = action. payload.todo;
    let todoText = action.payload.todoText;
    const updatedList = state.map(t=> { 
        if(t.id == todo.id){
            todo.todoData = todoText;
        }
        return t;
    });
    return updatedList;

} else if(action.type =='delete_todo'){
    let todo = action. payload.todo;
    const updatedList = state.filter(t => t.id !== todo.id)
    return updatedList;
} else if(action.type =='finish_todo'){
    let todo = action. payload.todo;
    let isFinished = action.payload.isFinished;
    const updatedList = state.map(t=> { 
        if(t.id == todo.id){
            todo.finished = isFinished;
        }
        return t;
    });     
       return updatedList;
}else{
    return state;
}

}

//action object ==> action methods  (action creator)
 const addTodo =(todoText) =>({type:'add-todo', payload:{todoText}})
 const deleteTodo =(id)=>({type:'del-todo', payload:{todoId:id}})



const response = createStore(todoReducer, []);
const {dispatch, subscribe, getState,replaceReducer} = createStore(todoReducer, []);


// console.log(response);
// {
//     dispatch: [],
//     subscribe:[],
//     getState:[],
//     replaceReducer:[]
// }
subscribe(()=> console.log(getState()))
//dispatch({type:'add-todo', payload:{todoText:'todo 1'}})


const actions = bindActionCreators({addTodo,deleteTodo},dispatch);

addTodo('todo 1')


// dispatch(addTodo('todo 1'))
// console.log(getState());

actions.dispatch({type:'add-todo', payload:{todoText:'todo 2'}})
// console.log(getState());


//dispatch({type:'del-todo', payload:{todoId:1}})
// console.log(getState());


actions.deleteTodo(1)
// dispatch(deleteTodo(1))