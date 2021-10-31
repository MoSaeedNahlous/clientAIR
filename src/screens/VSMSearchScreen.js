import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VSMSearchScreen = () => {

    const [state, setstate] = useState({searchQuery:'',results:null,qwords:[]})

    useEffect(() => {

    }, [])
    

    const searchHandler = async(e) => {
        e.preventDefault()
        const { data } = await axios.get(`https://air-svu.herokuapp.com/api/questions/search/vsm/${state.searchQuery}`)
        var qWords = []
        state.searchQuery.split(';').map(sec => 
            qWords.push(sec.split(':')[0])
        )
        setstate({...state, results:data,qwords:qWords})
    }
    
   return (
        <div>
            <form onSubmit={searchHandler} className="add-form row">
               <input
                   type="text"
                   name="searchQuery"
                   placeholder="كلمة:وزن;كلمة:وزن;وهكذا"
                   required
                   onChange={(e)=>setstate({ ...state, searchQuery: e.target.value })}
               />
                <button type="submit">VSM Search</button>
            </form>
            <small>Try: لا:5;الخدمة:10 </small>
            <br />
            <small>Try: كوفيد19:15;الزنجبيل:1 </small>
            <br />
            <h1>results with similarity values</h1>
            {state.results && state.results.sort((a, b) =>b.sim - a.sim  ).map(result => 
               <div key={result.doc._id} style={{ textAlign: 'right',border: '1px solid black',padding:'2%'}}>
                   <h1>Similarity value:{result.sim}</h1>
                   <strong>{result.doc.question}</strong>
                   <br />
                   <p>{result.doc.answerArr.map(word => {
                       if (state.qwords.includes(word)) {
                           return(<span style={{color: 'red'}}> {word}</span>)
                       }
                       return(<> {word}</>)
                   })}</p>
                </div>
            )}
        </div>
    )
}

export default VSMSearchScreen
