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

  .error {
    color: ${({ theme }) => theme.colors.wrong};
    margin-top: 0.8rem;
  }
`;

Widget.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: ${({ theme }) => theme.colors.primaryDark};
  padding: 2rem 3.5rem;
  transition: 0.3s;

  .back-btn + h1 {
    margin-left: 1rem;
  }
  .back-btn {
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
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

Widget.Image = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 180px;
`;

Widget.AnswersWrapper = styled.section`
  button {
    cursor: pointer;
    width: 100%;
    border: none;
    background: ${({ theme }) => theme.colors.secondaryDarker};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.2rem;
    border-radius: 0.5rem;
    letter-spacing: 0.03rem;

    & + button {
      margin-top: 1.2rem;
    }

    &:hover {
      background: #000000;
    }

    transition: 0.3s;
  }
`;

Widget.Answer = styled.button`
  background: ${(props) =>
    props.isClicked
      ? ({ theme }) =>
          props.isWrong ? theme.colors.wrong : theme.colors.success
      : ({ theme }) => theme.colors.secondaryDarker};
`;

Widget.Loading = styled.div`
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20%;
  height: 120px;
`;

export default Widget;
