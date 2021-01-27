import styled from 'styled-components';

const InputBase = styled.input`
  background: none;
  border: 1px solid
    ${(props) =>
      props.isError
        ? ({ theme }) => theme.colors.wrong
        : ({ theme }) => theme.colors.primaryDark};

  width: 100%;
  height: 5rem;

  padding: 0 1rem;
  border-radius: 0.5rem;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${(props) =>
      props.isError
        ? ({ theme }) => theme.colors.wrong
        : ({ theme }) => theme.colors.primaryDark};
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default InputBase;
