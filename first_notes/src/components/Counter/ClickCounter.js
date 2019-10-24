import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(){
        super();
        this.state={
            logincount : 0,
        }
    }

    // increment=()=>{
    //     // this.setState({
    //     //     count : this.state.count+1
    //     // },
    //     // ()=>{
    //     //     console.log('callback value', this.state.count)
    //     // }
    //     // )
    //     this.setState(prevState => ({
    //         count : prevState.count + 1,
    //     }))
    //     console.log(this.state.count );
    // }

    // incrementFive(){
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //}

    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
            <button onClick={incrementCount}>Clicked {count} times</button>
            {/* <button onClick={this.increment}>{this.state.login ? "log out" : "login"}</button> */}
            </div>
        
        )

    }
    
}

// export default withCounter(Counter,5);
export default ClickCounter