/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Widget from '../Widget';
import Button from '../Button';
import BackLinkArrow from '../BackLinkArrow';

export default function QuestionWidget({
  totalQuestions,
  question,
  index,
  onSubmit,
  addResult,
}) {
  const questionId = `question_${index}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [questionIsSubmited, setQuestionIsSubmited] = useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasSelectedAlternative = selectedAlternative !== undefined;

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestionIsSubmited(true);
    addResult(isCorrect);
    setTimeout(() => {
      setSelectedAlternative(undefined);
      setQuestionIsSubmited(false);
      onSubmit();
    }, 1000);
  };

  return (
    <Widget
      as={motion.section}
      transition={{ duration: 0.7 }}
      variants={{
        show: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: '-30%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h1>
          Pergunta {index + 1} de {totalQuestions}
        </h1>
      </Widget.Header>
      <Widget.Image url={question.image} />
      <Widget.Content id={questionId}>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            const isSelected = selectedAlternative === alternativeIndex;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            return (
              <Widget.Answer
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={questionIsSubmited && alternativeStatus}
              >
                <input
                  type="radio"
                  id={alternativeId}
                  name={questionId}
                  style={{ display: 'none' }}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Answer>
            );
          })}
          <Button type="submit" disabled={!hasSelectedAlternative}>
            CONFIRMAR
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
};
