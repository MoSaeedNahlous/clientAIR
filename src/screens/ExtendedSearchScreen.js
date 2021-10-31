import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ExtendedSearchScreen = () => {

    const [state, setstate] = useState({searchQuery:'',PerfectMatchResults:null,goodMatchResults:null})

    useEffect(() => {

    }, [])

    const searchHandler = async(e) => {
        e.preventDefault()
        const modifiedQuery = state.searchQuery.split(' ').join('-')
        const { data } = await axios.get(`http://localhost:5000/api/questions/search/extended/${modifiedQuery}`)
        setstate({...state, PerfectMatchResults:data.perfectMatch,goodMatchResults:data.goodMatch})
    }
    
   return (
        <div>
           <form onSubmit={searchHandler} className='add-form row'>
               
                    <input
                        type="text"
                        name="searchQuery"
                        required
                        onChange={(e)=>setstate({ ...state, searchQuery: e.target.value })}
               />
               

                   <button type="submit">Extended Boolean Search</button>
               
             
           </form>
           <small>Try: أغذية و الدهنية </small>
           <br />
           <small>Try: فيروسات و كورونا  </small>
           <br />
           <small>Try: فيروسات و الأغذية </small>   

           <br />
           <h1>perfect match results with similarity = 1</h1>
           {state.PerfectMatchResults && state.PerfectMatchResults.map(result => 
               <div key={result._id} style={{ textAlign: 'right' }}>
                   <strong>{result.question}</strong>
                   <br />
                   <p>{result.answerArr.map(word => {
                       if (state.searchQuery.split(' ').includes(word)) {
                           return(<span style={{color: 'red'}}> {word}</span>)
                       }
                       return(<> {word}</>)
                   })}</p>
                   <br />
                </div>
           )}
           <br />
           <h1>good match results with similarity = sqrt(1/2) </h1>
           {state.goodMatchResults && state.goodMatchResults.map(result => 
               <div key={result._id} style={{ textAlign: 'right' }}>
                   <strong>{result.question}</strong>
                   <br />
                   <p>{result.answerArr.map(word => {
                       if (state.searchQuery.split(' ').includes(word)) {
                           return(<span style={{color: 'red'}}> {word}</span>)
                       }
                       return(<> {word}</>)
                   })}</p>
                   <br />
                </div>
            ) }
        </div>
    )
}

export default ExtendedSearchScreen
