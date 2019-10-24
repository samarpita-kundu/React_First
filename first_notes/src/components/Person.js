import React from 'react'

function Person({person}){
    return (
        <div>
            <h1>{person.name}</h1>
            <h2>a.k.a {person.heroname}</h2>
        </div>
    ) 
 }

 export default Person