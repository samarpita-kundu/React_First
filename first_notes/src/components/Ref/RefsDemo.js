import React, {Component} from 'react'

class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef= React.createRef()
        // this.cref=null
        // this.setCref = element => {
        //     this.cref=element
        // }
    }
    componentDidMount(){
        // if(this.cref){
        //     this.cref.focus();
        // }
        // this.inputRef.current.focus();
        // console.log(this.inputRef);
    }
    onClickHandler = () => {
        alert(`this is ` + this.inputRef.current.value);
    }

    onFocusHandler = () =>{
        this.inputRef.current.focus();
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef} />
                {/* <input type="text" ref={this.setCref} />
                <button onClick={this.onClickHandler}>Click</button> */}
            </div>
        )
    }
}

export default RefsDemo