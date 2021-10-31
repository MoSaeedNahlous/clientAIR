import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchScreen = () => {

    const [state, setstate] = useState({searchQuery:'',results:null})

    useEffect(() => {

    }, [])

    const searchHandler = async(e) => {
        e.preventDefault()
        const modifiedQuery = state.searchQuery.split(' ').join('-')
        const { data } = await axios.get(`http://localhost:5000/api/questions/search/${modifiedQuery}`)
        setstate({...state, results:data})
    }
    
   return (
        <div>
            <form onSubmit={searchHandler} className='add-form row'>
               <input
                   type="text"
                   name="searchQuery"
                   onChange={(e)=>setstate({ ...state, searchQuery: e.target.value })}
               />
                <button type="submit">Boolean Search</button>
            </form>
            <small>Try: كوفيد19 </small>
            <br />
            <small>Try: كوفيد19 و لا  </small>
            <br />
            <small>Try: كوفيد19 لا الفلفل </small>
            <br />
            <small>Try: كوفيد19 أو الزنجبيل </small>
           
            {state.results && state.results.map(result => 
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

export default SearchScreen
