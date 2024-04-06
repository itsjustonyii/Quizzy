https://opentdb.com/api.php?amount=20&category=9&type=multiple


import { Routes, Route, useNavigate } from 'react-router-dom';
import Quiz from './Pages/Quiz/Quiz'
import { trivia } from './questions'
import { useState } from "react";
import { resultInitialState } from './questions'
import ScrollToTop from './Components/ScrollToTop';
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Leaderboard from './Pages/Leaderboard/Leaderboard';
import SignUpForm from './Pages/SignUp/SignUp'

function App() {

  const questions = trivia.Questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { Question, Choices, correctAnswer, explanation } = questions[currentQuestion];
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const [revealCorrectAnswer, setRevealCorrectAnswer] = useState(false);
  const [pop, setPop] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [name, setName] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [highScores, setHighScores] = useState(() => {
    const storedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
    return storedHighScores;
  });
  const navigate = useNavigate() 
  const score = result.score;


 

  const handleSignIn = () => {
    if (name.trim() !== "") {
      setIsSignedIn(true);
      navigate('/quiz')
     }} 

     const tryAgain = () => {
      setCurrentQuestion(0);
      setResult(resultInitialState);
      selectRandomQuestions();
      setShowResult(false)
     }

     const handleTryAgain = () => {
      tryAgain();
     }

     const handleSave = () => {
      const newScore = {
        name: name,
        score: result.score
      };
    
        
        const newHighScores = [...highScores, newScore].sort((a, b) => b.score - a.score);
        setHighScores(newHighScores);
        localStorage.setItem('highScores', JSON.stringify(newHighScores));
      
    };
    
        
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const selectRandomQuestions = () => {
      const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      const randomQuestions = shuffledQuestions.slice(0, 10);
      setSelectedQuestions(randomQuestions);
    };
  
  
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Routes>
       <Route path='/' element={ <Home />} />
       <Route path = '/signin' element={
      <SignUpForm name={name} setName={setName} isSignedIn={isSignedIn} handleSignIn={handleSignIn}/>} />
      <Route path='/quiz' element={
      <Quiz  answerIdx= {answerIdx} currentQuestion= {currentQuestion}
      setCurrentQuestion= {setCurrentQuestion} Question= {Question} Choices= {Choices}
      correctAnswer= {correctAnswer} explanation={explanation} setAnswerIdx={setAnswerIdx}
      answer={answer} setAnswer= {setAnswer} result= {result} setResult={setResult} showResult= {showResult}
      setShowResult= {setShowResult} isClicked= {isClicked} setIsClicked={setIsClicked}
      revealCorrectAnswer= {revealCorrectAnswer} setRevealCorrectAnswer= {setRevealCorrectAnswer} pop= {pop}
  setPop= {setPop} showTimer={showTimer} setShowTimer= {setShowTimer} questions= {questions} score={score} 
  isSignedIn={isSignedIn} handleSave={handleSave} handleTryAgain={handleTryAgain} selectRandomQuestions=
  {selectRandomQuestions} selectedQuestions={selectedQuestions}/>} />
      <Route path='/leaderboard' element={
      <Leaderboard  highScores={highScores}  setHighScores={setHighScores} />} />
      </Routes>
      </div>
      
  )
}

export default App;
