import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import QuizScreen from '../../src/screens/Quiz';

export default function ExternalQuizPage({ externalDb }) {
  const { theme } = externalDb;
  return (
    <ThemeProvider theme={theme}>
      <QuizScreen externalDb={externalDb} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [repoName, user] = context.query.id.split('__');
  const externalDb = await fetch(
    `https://${repoName}.${user}.vercel.app/api/db`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Could not get external db.');
    })
    .then((externalDbJson) => externalDbJson)
    .catch((e) => e);
  return {
    props: {
      externalDb,
    },
  };
}

ExternalQuizPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  externalDb: PropTypes.object.isRequired,
};
