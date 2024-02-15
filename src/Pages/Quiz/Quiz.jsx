import React, { useEffect }from 'react'
import styles from './quiz.module.css'
import Result from './result';
import AnswerTimer from '../../Components/AnswerTimer/AnswerTimer';
import { IoMdCheckmark } from "react-icons/io";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaSadCry } from "react-icons/fa";


function Quiz({questions, answerIdx, currentQuestion, setCurrentQuestion, Question, Choices, correctAnswer, 
  setAnswerIdx, answer, setAnswer, result, setResult, showResult, setShowResult, isClicked, setIsClicked,
  revealCorrectAnswer, setRevealCorrectAnswer, pop, setPop, showTimer, setShowTimer, score, handleSave, isSignedIn,
handleTryAgain, selectRandomQuestions, selectedQuestions}) {
   


   useEffect(() => {
     // Select 10 random questions when the component mounts or questions change
     selectRandomQuestions();
   }, []);
 
   
  const onAnswerClick = (choice, index) => {
    if (isClicked && !pop){
      setAnswerIdx(index);

      if (choice === correctAnswer) {
        setAnswer(true);
      } else {
        setAnswer(false);
        setRevealCorrectAnswer(true);
      }
      setIsClicked(false);
      setPop(true);
    }
  };

  const renderIcon = (index) => {
    if (index === answerIdx && answer) {
      return <BsEmojiSunglasses size={25} />;
    } else if (index === answerIdx && !answer) {
      return <FaSadCry size={25} />;
    } else {
      return null;
    }
  };

 const onClickNext = (finalAnswer) => {
  setRevealCorrectAnswer(false);
  setAnswerIdx(null);
  setIsClicked(true);
  setPop(false);
  setShowTimer(false);
  setResult((prev) => ({
    ...prev,
    score: finalAnswer ? prev.score + 5 : prev.score,
    correctAnswers: finalAnswer ? prev.correctAnswers + 1 : prev.correctAnswers,
  }));
  if (currentQuestion !== selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
  } else {
    setShowResult(true);
    if (isSignedIn) {
      handleSave();
    }
  }
  setTimeout(() => {
    setShowTimer(true)
  })
  
};
 

const correctAnswers = result.correctAnswers;
const comment = (score) => {
  if (score === 100) {
    return result.BestComment;
  } else if (score >= 70) {
    return result.GoodComment;
  } else if (score >= 50) {
    return result.AverageComment;
  }else {
    return result.BadComment;
  } 
};

const handleTimeOut = () => {
  onClickNext();
 }

 

return (
  < div className= {styles.overall}>
  {!showResult ? 
    (<div className={styles.container}>
      {showTimer && <AnswerTimer  onTimeOut={handleTimeOut}/>}
      <p><span>{currentQuestion + 1}</span>/{selectedQuestions.length}</p>
      <img className ={styles.img} src={Question} alt='whatsapp'/>
      <ul>
        {
          Choices.map((choice, index) => (
            <li key={choice}
               onClick = {() => onAnswerClick(choice, index)}
               className= {index === answerIdx && answer? styles.option:
                           index === answerIdx && !answer? styles.wrongoption:''} 
                           style={{ cursor: answerIdx === null && !revealCorrectAnswer? "pointer" : "not-allowed" }}
                           >
                {choice} {renderIcon(index)} {revealCorrectAnswer && choice === correctAnswer  && <IoMdCheckmark />}
            </li>
          ))
        }
      </ul>
       
      <button onClick={() => onClickNext(answer)}
      disabled={answerIdx === null}>
        {currentQuestion === selectedQuestions.length - 1 ? "Finish" : "Next"}
</button>
</div>):
(
 <Result score={score} comment= {comment} correctAnswers= {correctAnswers} handleTryAgain={handleTryAgain}/> 
)
}
</div>
  )
}


export default Quiz;