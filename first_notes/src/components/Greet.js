import React from 'react'

// function Greet() {
//     return <h1>Hello Sam</h1>
// }
const Greet = props => {
    const {name, surname} = props
return (
<div>
    <h1>Hello {name} {surname}</h1>
</div>
)
}

// const Greet = ({name,surname})=> {
// return (
// <div>
//     <h1>Hello {name} {surname}</h1>
// </div>
// )
// }
export default Greet;