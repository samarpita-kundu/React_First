import React,{ Component }  from 'react'

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            comments : '',
            topic : 'React'
        }
    }

    changeName = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    changeComments = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    changeTopic = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    submitHandler = (event) => {
        // this.setState({
        //     topic : event.target.value
        // })
        alert(`${this.state.name} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }


    render(){
        return(
        <form onSubmit={this.submitHandler}>
            <div>
                <label>UserName</label>
                <input type='text' value={this.state.name} onChange={this.changeName}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea type='text' value={this.state.comments} onChange={this.changeComments}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.changeTopic}>
                    <option>React</option>
                    <option>Angular</option>
                    <option>Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
        )

    }
}


export default Form