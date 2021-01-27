import React from 'react';

import styled from 'styled-components';

function Logo() {
  return (
    <img
      src="https://i.imgur.com/3CVN6S2.png"
      alt=""
      width={120}
      height={120}
    />
  );
}

const QuizLogo = styled(Logo)`
  align-self: center;

  @media screen and (max-width: 500px) {
    align-self: flex-start;
  }
`;

export default QuizLogo;
