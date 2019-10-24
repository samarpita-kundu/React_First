import React, { Component } from 'react';
import {BrowserRouter, Link, NavLink, Redirect,Prompt, Route} from 'react-router-dom';
import User from './User.js';

class Router extends Component {
    constructor(){
        super();
        this.state={
            login: false
        }
    }

    loginHandle=()=>{
        this.setState(prevState => ({
            login : !prevState.login
        }))
        console.log(this.state.login );
    }


    render() {
        return (
            <BrowserRouter>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><NavLink to="/about" exact activeStyle={{color: 'green'}}>About</NavLink></li>
              <li><NavLink to="/user/sam" exact activeStyle={{color: 'green'}}>User Sam</NavLink></li>
              <li><NavLink to="/user/peter" exact activeStyle={{color: 'green'}}>User Peter</NavLink></li>
            </ul>
            <Prompt when={!this.state.login} message={(location)=>{
            return location.pathname.startsWith('/user') ? 'Are you sure?' : true}}/> 
            <div>
            <button onClick={this.loginHandle}>{this.state.login ? "log out" : "login"}</button>
            <Route path="/" exact render={()=>{return(<h1>Welcome Home</h1>)}}/>
            {/* <Route path="/about" exact render={()=>{return(<h1>Welcome About</h1>)}}/> */}
            <Route path="/about" exact render={()=>{return(<h1>Welcome About</h1>)}}/>
            {/* <Route path="/user/:username" exact component={() => <User isAuthed={true} />}/> */}
            {/* component={() => <Dashboard isAuthed={true} />} */}
            {/* <Route path="/user/:username" exact component={User}/> */}
            <Route path="/user/:username" exact render={({match})=>(this.state.login ? 
            (<User username={match.params.username}/>) : (<Redirect to='/' />))}/>
            </div>
            </BrowserRouter>
        )

    }
    
}

// export default withCounter(Counter,5);
export default Router