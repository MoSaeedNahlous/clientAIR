import React, { useState } from 'react'
import axios from 'axios'

const AddQuestion = () => {

    const [QuestionSt, setQuestionSt] = useState({
        question: '',
        answer: ''
    })

    const onChangeHandler = (e) => {
        setQuestionSt({...QuestionSt,[e.target.name]:e.target.value})
    }


    const addQuestionHandler = async(e)=> {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/questions',QuestionSt)
        setQuestionSt({
        question: '',
        answer: ''
        })
        alert('Added!')

    }

    return (
        <div className="container">
            
            <form onSubmit={addQuestionHandler} className="add-form">
                <h1>Add a Question</h1>
                <br />
                <div>
                    <label>Question</label>
                    <br />
                    <input type="text" name="question" value={QuestionSt.question} required onChange={onChangeHandler}/>
                </div>
                <div>
                    <label>Answer</label>
                    <br />
                    <input type="text" name="answer" value={QuestionSt.answer} required onChange={onChangeHandler}/> 
                </div>
                <div>
                    <button type="submit">Submit</button> 
                </div>
                
            </form>
        </div>
    )
}

export default AddQuestion
