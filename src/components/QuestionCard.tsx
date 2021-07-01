import React from 'react';
import { AnswerObject } from '../App';

//define prop types for use
type Props = {
  totalQuestions: number;
  questionNumber: number;
  question: string;
  answers: string[];
  playerAnswer: AnswerObject | undefined;
  callback: any;
}
const QuestionCard: React.FC<Props> = ({totalQuestions, questionNumber, question, answers, playerAnswer, callback}) => {
  console.log({playerAnswer});
  return (
  <div>
    <em className="number">Question {questionNumber} of {totalQuestions}</em>
    <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
      {answers.map(answer => (
        <div key={answer}>
          <button disabled={!!playerAnswer} onClick={callback} value={answer}>
            <span dangerouslySetInnerHTML={{__html: answer}}/>
          </button>
        </div>
      ))}
    </div>
    </div>)
}

export default QuestionCard;