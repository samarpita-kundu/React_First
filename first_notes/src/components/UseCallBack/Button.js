import React from 'react'

function Button({handleClick, children}){
    console.log('Button clicked', children);
    return(
        <button onClick={handleClick}>{children}</button>
    )
}

export default React.memo(Button)
