import { shuffler } from './utils';

type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] };

//not used anymore
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
};

export const questionFetcher = async (amount: number, difficulty: string) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => (
    {
      ...question,
      answers: shuffler([...question.incorrect_answers, question.correct_answer])
    }))
}