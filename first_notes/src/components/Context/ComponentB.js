import React , {useContext} from 'react'
import ComponentC from './ComponentC';
// import UserContext from './UserContext';
import {UserContext,ChannelContext } from '../../App.js'

function ComponentB(){
    //hook useContext
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

        return (
        <div>
            {user} - {channel}
            {/* <ComponentC/> */}
        </div>
        )
} 
export default ComponentB