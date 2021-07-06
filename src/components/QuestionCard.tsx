import React from 'react';
import { AnswerObject } from '../App';
import {ButtonWrapper, Wrapper} from './QuestionCard.styles'

//define prop types for use
type Props = {
  totalQuestions: number;
  questionNumber: number;
  question: string;
  answers: string[];
  playerAnswer: AnswerObject | undefined;
  callback: any;
};

const QuestionCard: React.FC<Props> = ({totalQuestions, questionNumber, question, answers, playerAnswer, callback}) => {
  return (
  <Wrapper>
    <em className="number">Question {questionNumber} of {totalQuestions}</em>
    <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
      {answers.map(answer => (
        <ButtonWrapper
          key={answer}
          correct={playerAnswer?.correctAnswer === answer}
          playerClicked={playerAnswer?.playerAnswer === answer}
        >
          <button disabled={!!playerAnswer} onClick={callback} value={answer}>
            <span dangerouslySetInnerHTML={{__html: answer}}/>
          </button>
        </ButtonWrapper>
      ))}
    </div>
    </Wrapper>)
}

export default QuestionCard;