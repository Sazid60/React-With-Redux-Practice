
import './App.css'
import { QuizSummary } from './bodyComponents/QizSummary'
import Questions from './bodyComponents/Questions'
import Navbar from './components/layout/Navbar'
import { useAppSelector } from './redux/hooks';

function App() {

  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <>
      <Navbar />
      {/* quiz cards */}
      <div className='max-w-xl mx-auto'>
        <h1 className="text-center text-5xl my-12">Quiz App</h1>
        {!quizComplete ? <Questions /> : <QuizSummary />}
      </div>
    </>
  )
}

export default App
