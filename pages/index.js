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
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
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
            {db.external.map((url) => {
              const prepareUrl = url
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '');
              const [repoName, user] = prepareUrl.split('.');
              return (
                <Widget.Answer
                  key={`quiz_${repoName}`}
                  href={`/quiz/${user}__${repoName}?name=${name}`}
                >
                  {`${user}/${repoName}`}
                </Widget.Answer>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Garubieru" />
    </QuizBackground>
  );
}
