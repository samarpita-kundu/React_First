import React  , {useReducer} from 'react'
const initialState ={
    firstCounter : 0,
    seondCounter : 10
};
const reducer=(currentState, action)=>{
    switch(action.type){
        case 'increment' : return {...currentState, firstCounter : currentState.firstCounter + action.value}
        case 'decrement' : return {...currentState, firstCounter : currentState.firstCounter - action.value}
        case 'increment2' : return {...currentState, seondCounter : currentState.seondCounter + action.value}
        case 'decrement2' : return {...currentState, seondCounter : currentState.seondCounter - action.value}
        case 'reset' : return initialState
        default : return currentState
    }
}

function CounterTwo(){
   const [count,dispatch]= useReducer(reducer, initialState);
    return(
        <div>
            <div>Count-{count.firstCounter}</div>
            <div>Count2-{count.seondCounter}</div>
            <button type='button' onClick={()=>dispatch({type : 'increment', value : 5})}>Increment</button>
            <button type='button' onClick={()=> dispatch({type : 'decrement', value : 10})}>Decrement</button>
            <button type='button' onClick={()=>dispatch({type : 'increment2', value : 15})}>Increment</button>
            <button type='button' onClick={()=> dispatch({type : 'decrement2', value : 20})}>Decrement</button>
            <button type='button' onClick={()=>dispatch({type : 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo