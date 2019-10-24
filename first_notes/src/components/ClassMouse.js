import React , {Component} from 'react'

class ClassMouse extends Component{
    constructor(props){
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }


    longMousePosition = e =>{
        this.setState({ x : e.clientX , y : e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.longMousePosition);
    }

    render(){
        return(<div>
            X - {this.state.x} and  Y - {this.state.y}
        </div>)
    }
}
export default ClassMouse