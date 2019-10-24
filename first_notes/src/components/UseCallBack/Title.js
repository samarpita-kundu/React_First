import React from 'react'

function Title(){
    console.log('Title rendered');
    return(
        <h1>UseCallBack Hook</h1>
    )
}

export default React.memo(Title)
