import Quiz from './Pages/Quiz/Quiz'
import { trivia } from './questions'

function App() {
  return (
    <div>
       <Quiz questions = {trivia.Questions}/> 
      </div>

  )
}

export default App
