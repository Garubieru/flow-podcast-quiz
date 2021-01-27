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
function QuizResult({ points }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>Seu resultado</h1>
      </Widget.Header>
      <Widget.Content>Você acertou {points} de 5 perguntas!</Widget.Content>
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

  const [screenState, setScreenState] = useState('LOADING');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const index = currentQuestion;
  const question = questions[index];

  useEffect(() => {
    function AwaitLoading() {
      setTimeout(() => {
        setScreenState('QUIZ');
      }, 1000);
    }

    AwaitLoading();
  }, []);

  function setCurrentQuestionWithDelay(currentIndex, delay) {
    setTimeout(() => {
      if (currentIndex + 1 < totalQuestions) {
        setCurrentQuestion(currentIndex + 1);
      } else {
        setScreenState('RESULT');
      }
    }, delay);
  }

  const handleClick = (e) => {
    const userAnswer = e.target;
    const answers = userAnswer.parentElement.querySelectorAll('button');
    const answerIndex = [...answers].indexOf(userAnswer);

    if (answerIndex === question.answer) {
      userAnswer.setAttribute('style', 'background-color: #19df5c');
      setPoints(points + 1);
    } else {
      userAnswer.setAttribute('style', 'background-color: #c91d1d');
    }

    setCurrentQuestionWithDelay(index, 1000);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <QuizLoading />}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            handleClick={handleClick}
            totalQuestions={totalQuestions}
            index={index}
          />
        )}
        {screenState === screenStates.RESULT && <QuizResult points={points} />}
        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
}
