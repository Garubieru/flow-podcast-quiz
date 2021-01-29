import React from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';
import Link from '../Link';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.contrastText};
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.3rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export default function BackLinkArrow({ href }) {
  return (
    <StyledLink href={href}>
      <FiArrowLeft />
    </StyledLink>
  );
}

BackLinkArrow.propTypes = {
  href: PropTypes.string.isRequired,
};
