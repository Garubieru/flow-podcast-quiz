import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Widget from '../Widget';
import Button from '../Button';

export default function QuizResult({ results }) {
  const router = useRouter();
  const { name } = router.query;
  const resultsArray = results;
  return (
    <Widget
      as={motion.section}
      transition={{ duration: 0.7 }}
      variants={{
        normal: { opacity: 1, x: 0 },
        top: { opacity: 0, x: '-30%' },
      }}
      initial="top"
      animate="normal"
    >
      <Widget.Header>
        <h1>Seu resultado:</h1>
      </Widget.Header>
      <Widget.Content>
        Parabéns, {name}. Você acertou{' '}
        {resultsArray.filter((result) => result).length} de 5 perguntas!
        <Widget.Results>
          {resultsArray.map((result, index) => (
            <li key={`result_${result}`} data-error={result}>{`${
              index + 1
            }ª Pergunta: ${result ? 'Acertou' : 'Errou'}`}</li>
          ))}
        </Widget.Results>
        <Button onClick={() => router.push('/')}>MENU</Button>
      </Widget.Content>
    </Widget>
  );
}

QuizResult.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array.isRequired,
};
