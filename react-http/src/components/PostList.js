import React , {Component} from 'react'
import axios from 'axios'
class PostList extends Component{
    constructor(props){
        super(props)
        this.state = {
            wordInformation : [],
            semanticallySimilarWords : [],
            errorMsg : ''
        }
    }

    componentDidMount(){
        // https://jsonplaceholder.typicode.com/posts
        axios.get('https://api.gavagai.se/v3/lexicon/EN/help?additionalFields=SEMANTICALLY_SIMILAR_WORDS&apiKey=a0fa318dc4fa289c8a7915fb01402574&polarizeWord=false')
        .then(
            response => {
                console.log(response.data.semanticallySimilarWords);
                console.log(response.data.wordInformation);

                this.setState({semanticallySimilarWords : response.data.semanticallySimilarWords})            }
        ).catch(error=>{
            console.log(error)
            this.setState({errorMsg : 'Error Retreiving data'})
        })

        console.log(this.state.semanticallySimilarWords);
    }

    render(){
        const {semanticallySimilarWords, errorMsg} = this.state
        return (
            <div>
            list of posts 
            {
                semanticallySimilarWords.length ? 
                // (<div>{semanticallySimilarWords.word}</div>):
                semanticallySimilarWords.map((wordName,index) => <div key={index}>{wordName.word}</div>):
                null
            }
            {errorMsg ? <div>{errorMsg}</div>:null}
            </div>
        )
    }

}

export default PostList