import styled from 'styled-components';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

const QuizContainer = styled.div`
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

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <img
          src="https://i.imgur.com/3CVN6S2.png"
          alt=""
          width={120}
          height={120}
        />
        <Widget>
          <Widget.Header>
            <h1>Flow Podcast</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste seu conhecimento sobre o Flow Podcast, o melhor e mais
              ouvido Podcast do Brasil!
            </p>

            <Widget.Input type="text" placeholder="Digite seu nome :)" />
            <Widget.Button>Play</Widget.Button>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera.</h1>

            <p>Veja os outros quizes que a comunidade da Alura fez.</p>

            <Widget.SuggestionWrapper>
              <article>gabriel/alura-react</article>
              <article>claber/alura-react-quiz</article>
              <article>felipe-gamer/quiz-nextjs</article>
            </Widget.SuggestionWrapper>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={'https://github.com/Garubieru'} />
    </QuizBackground>
  );
}
