import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IconsWrapper = styled.div`
  position: absolute;
  bottom: 20%;
  right: 25%;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    bottom: 40px;
    right: 50%;
    transform: translate(50%, 50%);
  }
`;

export const IconLink = styled(motion.a)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0.8rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.colorHover};
  }
`;
