import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.5rem;
  margin-top: 2rem;

  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 1.8rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0.5rem;

  outline: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.contrastText};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.mainBg};
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
