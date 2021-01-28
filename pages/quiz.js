import React, { useEffect, useState } from 'react';
import db from '../db.json';
import { QuizBackground, QuizContainer } from '../src/components/Quiz';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget from '../src/components/QuestionWidget';
import Widget from '../src/components/Widget';

// eslint-disable-next-line react/prop-types
function QuizLoading() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Loading url="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif" />
    </Widget>
  );
}

// eslint-disable-next-line react/prop-types
function QuizResult({ results }) {
  const resultsArray = results;
  return (
    <Widget>
      <Widget.Header>
        <h1>Seu resultado</h1>
      </Widget.Header>
      <Widget.Content>
        Você acertou {resultsArray.filter((result) => result).length} de 5
        perguntas!
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz() {
  const { questions } = db;
  const totalQuestions = questions.length;

  const [results, setResults] = useState([]);
  const [screenState, setScreenState] = useState('LOADING');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const index = currentQuestion;
  const question = questions[index];

  useEffect(() => {
    setTimeout(() => {
      setScreenState('QUIZ');
    }, 1000);
  }, []);

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
    <QuizBackground backgroundImage={db.bg}>
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
