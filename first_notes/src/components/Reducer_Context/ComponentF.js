import React, {useContext} from 'react'
import {CountContext} from '../../App'
function ComponentF(){
    const countContext = useContext(CountContext)
        return (
        <div>
            <div>Count-{countContext.countState}</div>
            <button type='button' onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button type='button' onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button type='button' onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
        )
} 

export default ComponentF