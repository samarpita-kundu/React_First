import React from 'react'
const Hello = () => {
    return React.createElement('div',{className : 'hi'}, React.createElement('h1',null,'Hello'))
}

export default Hello;