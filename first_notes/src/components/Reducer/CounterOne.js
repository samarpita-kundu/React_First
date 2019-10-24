import React  , {useReducer} from 'react'
const initialState =0;
const reducer=(currentState, action)=>{
    switch(action){
        case 'increment' : return currentState + 1
        case 'decrement' : return currentState - 1
        case 'reset' : return initialState
        default : return currentState
    }
}

function CounterOne(){
   const [count,dispatch]= useReducer(reducer, initialState);
    return(
        <div>
            <div>Count-{count}</div>
            <button type='button' onClick={()=>dispatch('increment')}>Increment</button>
            <button type='button' onClick={()=> dispatch('decrement')}>Decrement</button>
            <button type='button' onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne