import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledHeader } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <StyledHeader>{title}</StyledHeader>
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
