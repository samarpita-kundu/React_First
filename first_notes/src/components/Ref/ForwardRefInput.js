import React from 'react'

// class ForwardRefInput extends Component {
//     render(){
//         return(
//             <div>
//                 <input type="text"/>
//             </div>
//         )
//     }
// }

const ForwardRefInput = React.forwardRef((props,ref) =>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})
export default ForwardRefInput