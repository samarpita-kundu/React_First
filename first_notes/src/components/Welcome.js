import React, { Component } from 'react'

class Welcome extends Component {
    clickMethod(){
        console.log('button is clicked');
    }

    render() {
        const {name,heroname} = this.props
        // const {state1,state2} = this.state
        return (
            <div>
            <h2>{name} a.k.a {heroname}</h2>
            <button onClick={this.clickMethod}>Click me</button>
            </div>
        
        )

    }
    
}

export default Welcome;