import { Component } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

import { Box } from './Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mx="auto"
        width="400px"
        pt={6}
        bg="mainBgr"
      >
        <Box as="section" display="flex" flexDirection="column" mx="auto">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
        </Box>
        <Box
          as="section"
          display="flex"
          flexDirection="column"
          mx="auto"
          width="100%"
        >
          {total > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Box>
      </Box>
    );
  }
}
