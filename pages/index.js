import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { QuizBackground, QuizContainer } from '../src/components/Quiz';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 0) return setIsError(true);
    return router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
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
              <Input
                onChange={handleChange}
                placeholder="Digite seu nome"
                isError={isError}
                value={name}
              />
              <Button type="submit">Play</Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera.</h1>

            <p>Veja os outros quizes que a comunidade da Alura fez.</p>

            <Widget.Answer>gabriel/alura-react</Widget.Answer>
            <Widget.Answer>claber/alura-react-quiz</Widget.Answer>
            <Widget.Answer>felipe-gamer/quiz-nextjs</Widget.Answer>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Garubieru" />
    </QuizBackground>
  );
}
