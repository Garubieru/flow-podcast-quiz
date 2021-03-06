import styled from 'styled-components';

export const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: '';
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto 10%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    padding-top: 1.2rem;

    img {
      align-self: flex-start;
    }
  }
`;
