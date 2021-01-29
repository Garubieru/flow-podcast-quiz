import styled from 'styled-components';

const InputBase = styled.input`
  background: none;
  border: 1px solid
    ${(props) =>
      props.isError
        ? ({ theme }) => theme.colors.wrong
        : ({ theme }) => theme.colors.primary};

  width: 100%;
  height: 5rem;

  padding: 0 1rem;
  border-radius: 0.5rem;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.contrastText};

  &::placeholder {
    color: ${(props) =>
      props.isError
        ? ({ theme }) => theme.colors.wrong
        : ({ theme }) => theme.colors.primary};
  }
`;

export default InputBase;
