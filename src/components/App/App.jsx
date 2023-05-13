import { useState, useEffect } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import { Wrapper } from './App.styled';

export const App = () => {
  const options = ['good', 'neutral', 'bad'];
  const [goodRevievs, setGoodRevievs] = useState(0);
  const [neutralRevievs, setNeutralRevievs] = useState(0);
  const [badRevievs, setBadRevievs] = useState(0);
  const [totalRevievs, setTotalRevievs] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const onLeaveFeedback = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGoodRevievs(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralRevievs(prevState => prevState + 1);
        break;
      case 'bad':
        setBadRevievs(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const total = goodRevievs + neutralRevievs + badRevievs;
    setTotalRevievs(total);
    setPositivePercentage(Math.round((goodRevievs / total) * 100));
  }, [goodRevievs, neutralRevievs, badRevievs]);

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalRevievs === 0 ? (
          <Notification message="No feedback" />
        ) : (
          <Statistics
            good={goodRevievs}
            neutral={neutralRevievs}
            bad={badRevievs}
            total={totalRevievs}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Wrapper>
  );
};
