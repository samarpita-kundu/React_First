import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js'
import Hi from './components/Hello'
import Message from './components/Message'
import ClickCounter from './components/Counter/ClickCounter'
import Click from './components/FunctionClick'
import EventBind from './components/EventBind'
import Parent from './components/ParentComponent'
import List from './components/PersonList'
import FormHandle from './components/Form'
import Fragments from './components/Fragments'
import RefsDemo from './components/Ref/RefsDemo'
import FocusInput from './components/FocusInput';
import ForwardRefParentInput from './components/Ref/ForwardRefParentInput'
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import HoverCounter from './components/Counter/HoverCounter';
import Counter from './components/Counter/Counter';
import UserProvider from './components/Context/UserContext';
import ComponentC from './components/Context/ComponentC';
import ComponentB from './components/Context/ComponentB';
import HookCounter from './components/Counter/HookCounter'
import UseStateHook from './components/UseEffect/UseEffectHook'
import UseEffectHook from './components/UseEffect/UseEffectHook'
import UseEffectClass from './components/UseEffect/UseEffectClass'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import DataFetching from './components/DataFetching/DataFetching'
import Reducer from './components/Reducer/Reducer'
import CounterOne from './components/Reducer/CounterOne'
import CounterTwo from './components/Reducer/CounterTwo'
import ComponentA from './components/Reducer_Context/ComponentA'
import ComponentD from './components/Reducer_Context/ComponentD'
import ComponentF from './components/Reducer_Context/ComponentF'
import {useReducer} from 'react'
import DataFetchOne from './components/DataFetching/DataFetchOne'
import DataFetchTwo from './components/DataFetching/DataFetchTwo'
import ParentComponent from './components/UseCallBack/ParentComponent'
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()


const initialState =0;
const reducer=(currentState, action)=>{
    switch(action){
        case 'increment' : return currentState + 1
        case 'decrement' : return currentState - 1
        case 'reset' : return initialState
        default : return currentState
    }
}

function App() {
  //const UserContext = React.createContext()
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Greet name='Samarpita'surname='kundu'>
          <p>this is children</p>
        </Greet> 
        <Greet name='Arijit' surname='ghosh'/> */}
        
        {/* <Welcome name='bruce' heroname='batman'/>
        <Welcome name='diana' heroname='wonder woman'/> */}
        {/* <Hi/>  */}
        {/* <Message/> */}
        {/* <ClickCounter/>  */}
        {/* <Click/> */}
        {/* <EventBind/> */}
        {/* <Parent/> */}
        {/* <List/> */}
        {/* <FormHandle/> */}
        {/* <Fragments/> */}
        {/* <RefsDemo/> */}
        {/* <FocusInput/> */}
        {/* <ForwardRefParentInput/> */}
        {/* <ErrorBoundary>
        <Hero heroname='Batman'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname='Joker'/>
        </ErrorBoundary> */}
        {/* <HoverCounter/> */}
        {/* <Counter>
          {(count,incrementCount)=>(
          <ClickCounter count={count} incrementCount={incrementCount}/>
          )}
        </Counter> 
        <Counter>
          {(count,incrementCount)=>(
          <HoverCounter count={count} incrementCount={incrementCount}/>
          )}
        </Counter> */}
        {/* <UserContext.Provider value={'sam'}>
          <ChannelContext.Provider value={'Kundu'}>
          <ComponentC/> 
          <ComponentB/>
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <HookCounter/> */}
        {/* <UseStateHook/> */}
        {/* <UseEffectHook/> */}
        {/* <UseEffectClass/> */}
        {/* <ClassMouse/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        {/* <DataFetching/> */}
        {/* <Reducer/> */}
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <CountContext.Provider value={{countState : count, countDispatch : dispatch}}>
          Count in App - {count}
          <ComponentA/>
          <ComponentD/>
          <ComponentF/>
        </CountContext.Provider> */}
        {/* <DataFetchOne/> */}
        {/* <DataFetchTwo/> */}
        {/* <ParentComponent/> */}
      </header>
    </div>
  );
}
export default App;
