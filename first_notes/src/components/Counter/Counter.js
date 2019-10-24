import React , {Component} from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count : 0
        }
    }   
    increment=()=>{   
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
        console.log(this.state.count )
    }
    render(){
        return (
        <div>
            {this.props.children(this.state.count,this.increment)}
        </div>
        ) 
    }
}


export default Counter