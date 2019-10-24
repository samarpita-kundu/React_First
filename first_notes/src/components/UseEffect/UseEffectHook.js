import React , {useState,useEffect} from 'react'

function UseEffectHook() {
    const [count,setCount] = useState(0)
    const [name, setName] = useState('');
    const tick=(()=>{
        setCount(prevCount=>prevCount+1)
    })
    useEffect(()=>{
        console.log('useEffect - Updating document title');
        document.title=`you have clicked ${count} times`
        window.setInterval(tick,1000);
    }, [])
    
    return(
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(prevState => prevState+1)}>click {count} times</button>
            {count}
        </div>
    )
}

export default UseEffectHook