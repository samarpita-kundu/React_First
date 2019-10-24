import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super();
        this.state={
            message : 'Hello SAM'
        }
        // this.clickMethod=this.clickMethod.bind(this);
    } 

    // clickMethod(){
    //     this.setState({
    //         message : 'good bye SAM'
    //     })
    //     console.log(this);
    // }

    clickMethod = () => {
        this.setState({
            message : 'good bye SAM'
        })
        console.log(this);
    }

    render() {
        const {name,heroname} = this.props
        // const {state1,state2} = this.state
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickMethod.bind(this)}>Click me</button> */}
                {/* <button onClick={() => this.clickMethod()}>Click me</button> */}
                <button onClick={this.clickMethod}>Click me</button>

            </div>
        
        )

    }
    
}

export default EventBind;