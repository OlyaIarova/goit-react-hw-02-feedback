import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from './GlobalStyle';
import { Layout } from "./Layout/Layout";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  totalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePercentage() {
    const { good } = this.state;
    return Number(((good / this.totalFeedback()) * 100).toFixed());
  }

  render() {
    const { good, neutral, bad } = this.state;
     const options = Object.keys(this.state);
      const total = this.totalFeedback();
      const totalPercentage = this.positivePercentage();
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
        </Section>
        <Section title="Statistics 📊">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
