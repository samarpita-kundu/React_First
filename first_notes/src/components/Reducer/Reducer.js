import React from 'react'

function Reducer(){
    const arr1=[1,2,3,4]
    const redcr = (accumulator , currentValue)=> accumulator + currentValue
    
    console.log(arr1.reduce(redcr));

    return(
        <div>{arr1.reduce(redcr,5)}</div>
    )
}

export default Reducer
