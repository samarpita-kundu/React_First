import React, { PureComponent } from "react"

class PureComp extends PureComponent {

    render(){
        console.log('Pue component render')
        return(
            <div>
                <h1>Pure component {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp;