import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import PureComp from './Ref/PureComp';
import RegularComp from './Ref/RegularComp';
import MemoComp from './Ref/MemoComp';
class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            name : 'sam'
        }
    
        // this.greetParent=this.greetParent.bind(this);
    }
    
    // greetParent(childName){
    //     alert(`Hello ${this.state.parentName} from ${childName}`)
    // }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : 'sam'
            })
        },2000)
    }

    render(){
        console.log('Parent component render')
        return (
        <div>Parent component
            {/* <ChildComponent greetHandler = {this.greetParent}/> */}
            <PureComp name={this.state.name}/>
            <RegularComp name={this.state.name}/>
            <MemoComp name={this.state.name}/>
        </div>
        )
    }
}

export default ParentComponent