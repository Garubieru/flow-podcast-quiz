import React, { useState } from 'react';
import db from '../db.json';
import { QuizBackground, QuizContainer } from '../src/components/Quiz';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';

export default function Quiz() {
  const { questions } = db;

  const [index, setIndex] = useState(0);

  const quest = questions[index];

  const handleClick = (e) => {
    const userAnswer = e.target;
    const answers = userAnswer.parentElement.querySelectorAll('button');
    const answerIndex = [...answers].indexOf(userAnswer);

    if (answerIndex !== quest.answer) {
      userAnswer.setAttribute('style', 'background-color: #c91d1d');
      setTimeout(() => {
        setIndex(index + 1);
      }, 1000);
    } else {
      userAnswer.setAttribute('style', 'background-color: #19df5c');
      setTimeout(() => {
        setIndex(index + 1);
      }, 1000);
    }
  };
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <img
          src="https://i.imgur.com/3CVN6S2.png"
          alt=""
          width={120}
          height={120}
        />
        <Widget>
          <Widget.Header>
            <h1>
              Pergunta {questions.indexOf(quest) + 1} de {questions.length}
            </h1>
          </Widget.Header>
          <Widget.Image url={quest.image} />
          <Widget.Content>
            <h1>{quest.title}</h1>
            <p>{quest.description}</p>
            <Widget.AnswersWrapper>
              {quest.alternatives.map((alternative) => (
                <Widget.Answer
                  type="button"
                  onClick={handleClick}
                  key={alternative}
                >
                  {alternative}
                </Widget.Answer>
              ))}
            </Widget.AnswersWrapper>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
}
