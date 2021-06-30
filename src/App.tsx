import React, { useState } from 'react';
import { questionFetcher, Difficulty, QuestionState } from './Fetcher';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  playerAnswer: string;
  isCorrect: boolean;
  correctAnswer: string
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [playerAnswers, setPlayerAnswers] = useState<AnswerObject[]>([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const triviaStarter = async () => {
    //loading the api fetch
    setLoading(true);
    //reset game state
    setGameOver(false);

    const newGame = await questionFetcher(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newGame);
    setScore(0);
    setPlayerAnswers([]);
    setQuestionNumber(1);
    setLoading(false);
  }


  const answerchecker = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  console.log(questions);

  return (
    <div className="App">
      <h1>QUIZWIZ</h1>
      {
        (gameOver || playerAnswers.length === TOTAL_QUESTIONS) &&
         (<button className="start" onClick={triviaStarter}>
          Start
        </button>)
      }
      {!gameOver && <p className="score">Your Score:</p>}
      {loading && (<p className="Loading">Loading Questions . . .</p>)}
      {!loading && !gameOver && <QuestionCard
        questionNumber={questionNumber + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[questionNumber].question}
        answers={questions[questionNumber].answers}
        playerAnswer={playerAnswers ? playerAnswers[questionNumber] : undefined }
        callback={answerchecker}
      /> }
      { !loading &&
        !gameOver &&
        (playerAnswers.length === questionNumber) &&
        (questionNumber !== TOTAL_QUESTIONS) &&
        <button className="next" onClick={nextQuestion}>
        Next Question
      </button>}
    </div>
  );
}

export default App;
