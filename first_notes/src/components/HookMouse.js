import React, {useState,useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const longMousePosition = e =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',longMousePosition)
        return(()=>{
            window.removeEventListener('mousemove',longMousePosition)
        })
    }, [])

    return(<div>
        Hooks X - {x} and Y - {y}
    </div>)

}

export default HookMouse