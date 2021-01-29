import React from 'react';
import { motion } from 'framer-motion';
import Widget from '../Widget';

export default function QuizLoading() {
  return (
    <Widget
      as={motion.section}
      transition={{ duration: 0.7 }}
      variants={{
        normal: { opacity: 1, y: 0 },
        top: { opacity: 0, y: '-30%' },
      }}
      initial="top"
      animate="normal"
    >
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Loading url="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif" />
    </Widget>
  );
}
