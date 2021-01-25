import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
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

    font: 500 1.6rem "Segoe UI";
    color: ${({ theme }) => theme.colors.primary} 
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <meta name="title" content={db.title} />
        <meta name="description" content={db.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content={db.title} />
        <meta property="og:image" content={db.bg} />
        <meta property="og:description" content={db.description} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
