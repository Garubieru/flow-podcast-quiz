import styled from 'styled-components';

const Widget = styled.div`
  background: #0e191b;

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

  ul {
    list-style: none;
  }
`;

export default Widget;
