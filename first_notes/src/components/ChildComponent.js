import React, { Component } from 'react'

class ChildComponent extends Component {
// constructor(props){
//     super(props);
//     this.state={
//         parentName : 'parent'
//     }

//     this.greetParent=this.greetParent.bind(this);
// }

// greetParent(){
//     alert(`Hello ${this.state.parentName}`)
// }

render(){
    return(
        <div>
            <button onClick={() => this.props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}
}

export default ChildComponent