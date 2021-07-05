import React, { useState } from 'react';
import { questionFetcher, QuestionState } from './Fetcher';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper } from './App.styles';

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
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
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState<string>('easy');

  const triviaStarter = async () => {
    //loading the api fetch
    setLoading(true);
    //reset game state
    setGameOver(false);
    const newGame = await questionFetcher(
      Number(totalQuestions),
      difficulty
    );
    setQuestions(newGame);
    setScore(0);
    setPlayerAnswers([]);
    setQuestionNumber(1);
    setLoading(false);
  };


  const answerchecker = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const playerChoice = e.currentTarget.value;
      const isCorrect = questions[questionNumber - 1].correct_answer === playerChoice;
      if (isCorrect) setScore(prev => prev + 1);
      const answerObject = {
        question: questions[questionNumber - 1].question,
        playerAnswer: playerChoice,
        isCorrect,
        correctAnswer: questions[questionNumber - 1].correct_answer,
      };
      setPlayerAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //next question in array is equal to current number
    const nextQuestion = questionNumber;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestion + 1);
    }
  };

  const totalQuestionSetter = (e: any) => {
    if (!isNaN(Number(e.target.value))) {
      setTotalQuestions(e.target.value);
    } else {
      alert('Please only input numbers!')
      e.target.value = e.target.value.slice(0,-1);
    }
  };

  const difficultySetter = (e: any) => {
    setDifficulty(e.target.value);
  };

  return (
		<>
			<GlobalStyle />
			<Wrapper>
				<h1>QUIZWIZ</h1>
				{(gameOver || playerAnswers.length === TOTAL_QUESTIONS) && (
					<div className="specSelector">
						<input
							type="text"
							id="totalQuestion"
							placeholder="how many questions"
							defaultValue=""
							onChange={totalQuestionSetter}
						></input>
						<select
							name="difficulty"
							id="difficulty"
							onChange={difficultySetter}
						>
							<option value="easy">EASY</option>
							<option value="medium">MEDIUM</option>
							<option value="hard">HARD</option>
						</select>
            <button className="start" onClick=
            {triviaStarter}>
            	Start
            </button>
					</div>
				)}
				{!gameOver && <p className="score">Your Score: {score}</p>}
				{loading && <p className="Loading">Loading Questions . . .</p>}
				{!loading && !gameOver && TOTAL_QUESTIONS && (
					<QuestionCard
						questionNumber={questionNumber}
						totalQuestions={totalQuestions}
						question={questions[questionNumber - 1].question}
						answers={questions[questionNumber - 1].answers}
						playerAnswer={
							playerAnswers ? playerAnswers[questionNumber - 1] : undefined
						}
						callback={answerchecker}
					/>
				)}
				{!loading &&
					!gameOver &&
					playerAnswers.length === questionNumber &&
					questionNumber !== TOTAL_QUESTIONS && (
						<button className="next" onClick={nextQuestion}>
							Next Question
						</button>
					)}
			</Wrapper>
		</>
	);
}

export default App;
