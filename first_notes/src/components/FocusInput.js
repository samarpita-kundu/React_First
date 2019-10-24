import React, {Component} from 'react'
import RefsDemo from './Ref/RefsDemo';

class FocusInput extends Component {
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
        
    }
    
    onClickHandler = () => {
        this.componentRef.current.onFocusHandler();
    }

    render(){
        return(
            <div>
                <RefsDemo ref={this.componentRef}/>
                <button onClick={this.onClickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput