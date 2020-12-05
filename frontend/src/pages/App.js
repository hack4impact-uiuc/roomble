import React, { useEffect, useState } from "react";
import '../styles/App.css';
import { Form, Radio } from 'semantic-ui-react'
import {putQuizAnswers} from "../utils/api"



export default function App() {
    const questions = [ {
        questionText: "What kind of sleeper do I consider myself as:",
        answerOptions: [
            {answerText: "Light sleeper"},
            {answerText: "Inbetween"},
            {answerText: "Heavy sleeper"}
        ]
    },
    {
        questionText: "I anticipate having overnight guests in the room?",
        answerOptions: [
            {answerText: "Rarely"},
            {answerText: "Sometimes"},
            {answerText: "Often"}

        ]
    },
    {
        questionText: "What ATLA character do you most relate to?",
        answerOptions: [
            {answerText: "Aang"},
            {answerText: "Azula"},
            {answerText: "Sokka"}

        ]
    },
    {
        questionText: "I find myself studying most often in:",
        answerOptions: [
            {answerText: "the library/study room"},
            {answerText: "my room"},
            {answerText: "public areas"}

        ]
    },
    
    
]; 
    const [answers, setAnswers] = useState([]); 
    const [answerDisplay, setAnswerDisplay] = useState([]) 

    



	return (  
        <div className="app">
        <div className="quiz">
		<div className='quizTitle'>
            <h1>Compatibility Quiz</h1>
        </div>
        <div className='question-total'>
            Total Quiz Questions: {questions.length}
        </div>
        <div className="submit-button">
        <button onClick={event => putQuizAnswers(answers)}>
                Submit Quiz
          </button>
        </div>
        <div className="questions">
            {questions.map((question, questionIndex) => (
                <div key={questionIndex}>
<h3>{question.questionText} {answerDisplay[questionIndex]} </h3>
                {question.answerOptions.map((answer, answerIndex) => (
							<Form key={answerIndex}>
                                <Radio 
                                    label={answer.answerText}
                                    name='answerGroup'
                                    value={answer.answerText}
                                    checked={answers[questionIndex] === answer.answerText}
                                    onChange={(e, {value}) =>{
                                        const answerIndexCopy = [...answers]
                                        const answerDisplayCopy = [...answerDisplay]
                                        answerDisplayCopy[questionIndex] = value
                                        setAnswerDisplay(answerDisplayCopy)
                                        answerIndexCopy[questionIndex] = answerIndex
                                        setAnswers(answerIndexCopy)
                                        console.log(answers)
                                        console.log(value)
                                    }}
                                
                                />
                            </Form>
						))}
                </div>
            ))}
        </div>
    </div>
    </div>  
	);
  }
  



