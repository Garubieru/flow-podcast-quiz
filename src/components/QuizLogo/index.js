import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

function Logo() {
  return (
    <motion.img
      src="https://i.imgur.com/3CVN6S2.png"
      alt=""
      width={120}
      height={120}
      transition={{ delay: 0.2, duration: 0.7 }}
      variants={{
        normal: { opacity: 1, y: 0 },
        top: { opacity: 0, y: '120%' },
      }}
      initial="top"
      animate="normal"
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
