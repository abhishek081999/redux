Reducers 
segrigte action/function in one place when we need we take/triger   >> action dispatch....


 Function:  expact
 -State: object
 -Action: object >> this state what operation >> on that bases we decide what modification must be there in state

 action>   {
    type: 'addtodo',
    payload:{
        logic
    }
 }
 
 then use 
 useReducerHook argumnts> reducer method  , initial state >>>>>>>>>give state object +  Dispatch method

  const [list,dispatch] =useReducer(todoReducer,[])

