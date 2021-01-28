import React, { useEffect, useState } from 'react';

import db from '../../db.json';
import Home from '../index';

export default function ExternalQuizPage() {
  const [quizDb, setQuizDb] = useState('');
  useEffect(() => {
    async function getQuizDb() {
      const response = await fetch(`${db.external[0]}api/db`);
      const responseDb = await response.json();
      setQuizDb(responseDb);
    }
    getQuizDb();
  }, []);
  return <Home external={quizDb} />;
}
