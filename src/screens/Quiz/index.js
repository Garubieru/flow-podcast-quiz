import React, { useEffect, useState } from 'react';
import db from '../../../db.json';

import { QuizBackground, QuizContainer } from '../../components/Quiz';
import Footer from '../../components/Footer';
import QuizLogo from '../../components/QuizLogo';

import QuestionWidget from '../../components/QuestionWidget';
import QuizResult from '../../components/QuizResult';
import QuizLoading from '../../components/QuizLoading';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

// eslint-disable-next-line react/prop-types
export default function Quiz({ externalDb }) {
  const [baseDb, setBaseDb] = useState(db);
  const { questions } = baseDb;
  const totalQuestions = questions.length;

  const [results, setResults] = useState([]);
  const [screenState, setScreenState] = useState('LOADING');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const index = currentQuestion;
  const question = questions[index];

  useEffect(() => {
    if (externalDb) {
      setBaseDb(externalDb);
    }
    setTimeout(() => {
      setScreenState('QUIZ');
    }, 1000);
  }, [externalDb]);

  const addResult = (result) => {
    setResults([...results, result]);
  };

  const handleSubmitQuiz = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState('RESULT');
    }
  };

  return (
    <QuizBackground backgroundImage={baseDb.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <QuizLoading />}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            index={index}
            question={question}
            onSubmit={handleSubmitQuiz}
            totalQuestions={totalQuestions}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.RESULT && (
          <QuizResult results={results} />
        )}
        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
}
