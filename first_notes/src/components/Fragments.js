import React , {Component} from 'react'
import Columns from './Columns';

class Fragments extends Component{
    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <Columns/>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Fragments