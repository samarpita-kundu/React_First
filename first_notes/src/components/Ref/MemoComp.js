import React from 'react'

function MemoComp({name}){
    console.log('Memo component render')
    return (
            <div> Memo component
                <h1>{name}</h1>
            </div>
        
    ) 
 }

 export default React.memo(MemoComp)