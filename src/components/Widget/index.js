import styled from 'styled-components';

const Widget = styled.div`
  background: ${({ theme }) => theme.colors.secondary};

  margin: 2rem 0;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
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

  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem 3.5rem;
  a + h1 {
    margin-left: 1rem;
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

Widget.Answer = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 1.2rem;
  border-radius: 0.5rem;
  letter-spacing: 0.03rem;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background: #000000;
  }

  & + label {
    margin-top: 1.2rem;
  }

  & + a {
    margin-top: 1.2rem;
  }

  &[data-selected='true'] {
    background-color: ${({ theme }) => theme.colors.primary};

    &[data-status='SUCCESS'] {
      background-color: ${({ theme }) => theme.colors.success};
    }
    &[data-status='ERROR'] {
      background-color: ${({ theme }) => theme.colors.wrong};
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.wrong};
  }
`;

Widget.Loading = styled.div`
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20%;
  height: 120px;
`;

Widget.Results = styled.ul`
  li {
    padding: 0.8rem;

    margin-top: 1.2rem;
    border-radius: 0.5rem;

    &[data-error='true'] {
      background-color: ${({ theme }) => theme.colors.success};
    }

    &[data-error='false'] {
      background-color: ${({ theme }) => theme.colors.wrong};
    }
  }
`;

export default Widget;
