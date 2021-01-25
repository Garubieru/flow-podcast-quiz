import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 2rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  img {
    width: 6rem;
    margin-right: 2rem;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
`;
