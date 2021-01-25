import styled from 'styled-components';

const Widget = styled.div`
  background: ${({ theme }) => theme.colors.secondaryDark};

  margin: 2rem 0;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  overflow: hidden;

  h1,
  h2,
  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: ${({ theme }) => theme.colors.primaryDark};
  padding: 2rem 3.5rem;
`;

Widget.Content = styled.div`
  padding: 2rem 3.5rem;
  p {
    margin-bottom: 2.5rem;
  }
  h1 + p {
    margin-top: 2rem;
  }
  ul {
    list-style: none;
  }
`;

Widget.Input = styled.input`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};

  width: 100%;
  height: 5rem;

  padding: 0 1rem;
  border-radius: 0.5rem;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  transition: 0.3s;
`;

Widget.Button = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.5rem;
  margin-top: 2rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.secondaryDarker};
  border: none;
  border-radius: 0.5rem;

  outline: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.black};
  }
`;

Widget.SuggestionWrapper = styled.section`
  article {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.secondaryDarker};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.2rem;
    border-radius: 0.5rem;
    letter-spacing: 0.03rem;

    & + article {
      margin-top: 1.2rem;
    }

    &:hover {
      background: #000000;
    }

    transition: 0.3s;
  }
`;

export default Widget;
