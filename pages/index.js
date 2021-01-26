import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { QuizBackground, QuizContainer } from '../src/components/Quiz';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);

  const createError = (form) => {
    const input = form.firstChild;
    const error = document.createElement('p');
    error.classList.add('error');
    error.innerHTML = 'Digite um nome válido!';

    input.after(error);
    setIsError(true);
  };

  const cleanErrors = () => {
    const error = document.querySelector('.error');
    if (error) {
      error.remove();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cleanErrors();
    // eslint-disable-next-line no-console
    if (name.length <= 0) return createError(e.target);
    return router.push(`/quiz?name=${name}`);
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
            <h1>Flow Podcast</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste seu conhecimento sobre o Flow Podcast, o melhor e mais
              ouvido Podcast do Brasil!
            </p>
            <form onSubmit={handleSubmit}>
              <Widget.Input
                isError={isError}
                type="text"
                placeholder="Digite seu nome :)"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Widget.Button type="submit">Play</Widget.Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera.</h1>

            <p>Veja os outros quizes que a comunidade da Alura fez.</p>

            <Widget.AnswersWrapper>
              <button type="button">gabriel/alura-react</button>
              <button type="button">claber/alura-react-quiz</button>
              <button type="button">felipe-gamer/quiz-nextjs</button>
            </Widget.AnswersWrapper>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Garubieru" />
    </QuizBackground>
  );
}
