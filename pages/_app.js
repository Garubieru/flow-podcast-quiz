import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/GlobalStyles';
import db from '../db.json';

const { theme } = db;

// eslint-disable-next-line react/prop-types
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
