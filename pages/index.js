import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';

import { QuizBackground, QuizContainer } from '../src/components/Quiz';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import Link from '../src/components/Link';

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
        <Widget
          as={motion.section}
          transition={{ delay: 0.6, duration: 1 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
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
        <Widget
          as={motion.section}
          transition={{ delay: 0.9, duration: 1 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '80%' },
          }}
          initial="hidden"
          animate="show"
        >
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
                  as={Link}
                  key={`quiz_${repoName}`}
                  href={`/quiz/${repoName}__${user}?name=${name}`}
                  data-disabled={name.length === 0}
                >
                  {`${user}/${repoName}`}
                </Widget.Answer>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.section}
          transition={{ delay: 1.2, duration: 1 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '60%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Garubieru" />
    </QuizBackground>
  );
}
