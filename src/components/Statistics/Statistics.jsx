import React from 'react';
import PropTypes from 'prop-types';
import { StyledStatisticsItem } from './Statistics.styles';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <>
      <StyledStatisticsItem>Good: {good}</StyledStatisticsItem>
      <StyledStatisticsItem>Neutral: {neutral}</StyledStatisticsItem>
      <StyledStatisticsItem>Bad: {bad}</StyledStatisticsItem>
      <StyledStatisticsItem>Total: {total}</StyledStatisticsItem>
      <StyledStatisticsItem>
        Positive feedback: {positivePercentage}%
      </StyledStatisticsItem>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
