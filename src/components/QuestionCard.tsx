import React from 'react';

//define prop types for use
type Props = {
  totalQuestions: number;
  questionNumber: number;
  question: string;
  answers: string[];
  playerAnswer: any;
  callback: any;
}
const QuestionCard: React.FC<Props> = ({totalQuestions, questionNumber, question, answers, playerAnswer, callback}) => {
  return (
  <div>
    <em className="number">Question {questionNumber} of {totalQuestions}</em>
    <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
      {answers.map(answer => (
        <div>
          <button disabled={playerAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}/>
          </button>
        </div>
      ))}
    </div>
    </div>)
}

export default QuestionCard;