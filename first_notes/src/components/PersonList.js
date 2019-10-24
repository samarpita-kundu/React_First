import React from 'react'
import Person from './Person'
function PersonList(){
    const persons = [
        { 
            name:'Bruce',
            id:1,
            heroname:'batman',
            age:29
        },
        {
            name:'Diana',
            id:2,
            heroname:'wonder woman',
            age:28
        }
    ]
    const personList =persons.map(person => <Person key={person.id} person={person}></Person>)
    // <div>
    //     <h1>{person.name}</h1>
    //     <h2>a.k.a {person.heroname}</h2>
    // </div>
    

    return <div>{personList}</div>
    
}

function NameList({person}){
    const names = ['bruce','diana','bruce']
    const nameList =names.map((name,index) => <h1 key={index}>{index} {name}</h1>)

    return (
        <div>
            {nameList}
        </div>
    ) 
 }

export default PersonList