import styled from 'styled-components';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 10%;
  padding-top: 3rem;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding-top: 1.2rem;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>League of Legends</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Test your knowledge about League of Legends universe!</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Other quizes</h1>

            <p>Take a look on others awesome quizes.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={'https://github.com/Garubieru'} />
    </QuizBackground>
  );
}
