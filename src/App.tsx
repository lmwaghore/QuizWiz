import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [playerAnswers, setPlayerAnswers] = useState([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const triviaStarter = async () => {

  }

  const answerchecker = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>QUIZWIZ</h1>
      <button className="start" onClick={triviaStarter}>
        Start
      </button>
      <p className="Loading">Loading Questions . . .</p>
      <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        playerAnswer={playerAnswers ? playerAnswers[number] : undefined }
        callback={answerchecker}
      />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
