import React from 'react'
// import { UserConsumer } from './UserContext';
import {UserContext,ChannelContext } from '../../App.js'

function ComponentC(){
    return(
        <UserContext.Consumer>
            {
                username => {
                     return (
                         <ChannelContext.Consumer>
                             {
                                 channel=>{
                                     return <div>Hello {username} {channel}</div>
                                 }
                             }
                         </ChannelContext.Consumer>
                     ) 
                }
            }
        </UserContext.Consumer>
    )
} 

export default ComponentC