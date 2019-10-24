import React , {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }
    render(){
        if (this.state.hasError){
            return(<div>Something went wrong</div>)
        }
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary