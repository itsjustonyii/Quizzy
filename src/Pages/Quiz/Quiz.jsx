import React from 'react'
import { useState, useRef } from "react";
import styles from './quiz.module.css'


function Quiz({ questions }) {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { Question, Choices, correctAnswer } = questions[currentQuestion];
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  
  const buttonRef = useRef(null);
  

  const onAnswerClick = (choice, index) => {
   console.log(answerIdx)
   setAnswerIdx(index);
   if (choice === correctAnswer) {
      setAnswer(true);
   } else {
    setAnswer(false);
   }
  }

  const Click = event => {
    buttonRef.current.disabled = true;
  }

  return (
    <div className={styles.container}>
      <p><span>{currentQuestion + 1}</span>/{questions.length}</p>
      <h4>{Question}</h4>
      <ul>
        {
          Choices.map((choice, index) => (
            <li key={choice}
             
               onClick = {() => onAnswerClick(choice, index)}
               className= {index === answerIdx && choice === correctAnswer? styles.option :
                           index === answerIdx && choice !== correctAnswer? styles.wrongoption:''} >
                {choice}
            </li>
          ))
        }
      </ul>
      <button>Next</button>
   </div>
  )
}

export default Quiz;