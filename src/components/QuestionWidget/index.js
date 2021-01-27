/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';

export default function QuestionWidget({
  totalQuestions,
  question,
  handleClick,
  index,
}) {
  return (
    <Widget>
      <Widget.Header>
        <h1>
          Pergunta {index + 1} de {totalQuestions}
        </h1>
      </Widget.Header>
      <Widget.Image url={question.image} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Widget.AnswersWrapper>
          {question.alternatives.map((alternative) => (
            <Widget.Answer
              type="button"
              onClick={handleClick}
              key={`alternative_${alternative}`}
            >
              {alternative}
            </Widget.Answer>
          ))}
        </Widget.AnswersWrapper>
      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
