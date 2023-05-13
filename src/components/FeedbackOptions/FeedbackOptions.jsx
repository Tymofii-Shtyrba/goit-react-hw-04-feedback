import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledList,
  StyledListItem,
  StyledButton,
} from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <StyledList>
      {options.map(option => (
        <StyledListItem key={option}>
          <StyledButton name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
