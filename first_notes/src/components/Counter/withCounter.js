import React from 'react'

const withCounter =  (WrappedComponent,incrementNumber) =>{
    class WithCounter extends React.Component {
        constructor(props){
            super(props);
            this.state={
                count : 0
            }
        }   
        increment=()=>{   
            this.setState(prevState => ({
                count : prevState.count + incrementNumber
            }))
            console.log(this.state.count )
        }
        render(){
            return <WrappedComponent 
            count = {this.state.count} 
            incrementCount ={this.increment}/>
        }
    }
    return WithCounter
}

export default withCounter