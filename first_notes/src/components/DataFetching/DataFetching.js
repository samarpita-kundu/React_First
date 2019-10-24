import React , {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching(){
    // const [posts, setPosts]=useState([])
    const [post, setPost]=useState({})
    const [id, setId]=useState(1)
    const [buttonClickId, setButtonClickId]=useState(1)

    const handleFetchOnClick=()=>{
        setButtonClickId(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
        .then(res => {
            console.log(res)
            // setPosts(res.data)
            setPost(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[buttonClickId])
    return(
        <div>
            <form>
            <input type='text' value={id} 
            onChange={e=>setId(e.target.value)}
            />
            <button type='button' onClick={handleFetchOnClick}>Fetch Data</button>
            {/* {posts.map((post)=><li key={post.id}>{post.title}</li>)} */}
            {<li key={post.id}>{post.title}</li>}
            </form>
            
        </div>
    )
}
export default DataFetching