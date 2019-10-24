import React , {useState} from 'react'

function HookCounter() {
    const initialState = 0
    const [count,setCount] = useState(initialState)
    const [name,setName] = useState({firstName : '',lastName : ''})
    const [items,setItems] = useState([])
    const addItem = () => {
        setItems([
        ...items,
        {
            id : items.length,
            value : Math.floor(Math.random() * 10) + 1
        }
    ])}
    return (
        <div>
            <form>
                <div>Count: {count}</div>
                <button onClick={() => setCount(initialState)}>Reset</button>
                <button onClick={() => setCount(prevState=>prevState+1)}>Increment</button>
                <button onClick={() => setCount(prevState=>prevState-1)}>Decrement</button>
                <div>
                    <input type='text' value={name.firstName} 
                    onChange={e => setName({...name,firstName : e.target.value})}></input>
                    <input type='text' value={name.lastName}
                    onChange={e => setName({...name,lastName : e.target.value})}></input>
                    <h2>First Name : {name.firstName}</h2>
                    <h2>Last Name : {name.lastName}</h2>
                    <h2>{JSON.stringify(name)}</h2>
                </div>    
            </form>
        </div>
    )
}

export default HookCounter