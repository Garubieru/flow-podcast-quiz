import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }

  body {
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.colors.contrastText}
  }

  html,
  body,
  input,
  button {
    font: 500 1.6rem Nunito;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
