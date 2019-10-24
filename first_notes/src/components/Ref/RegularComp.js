import React, { Component } from "react"

class RegularComp extends Component {

    render(){
        console.log('Regular component render')
        return(
            <div>
                <h1>Regular component {this.props.name}</h1>
            </div>
        )
    }
}

export default RegularComp;