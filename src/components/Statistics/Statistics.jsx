import PropTypes from 'prop-types';
import { StatisticsList, StatisticsListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsListItem>
        Good:<span>{good}</span>
      </StatisticsListItem>
      <StatisticsListItem>
       Neutral: <span>{neutral}</span>
      </StatisticsListItem>
      <StatisticsListItem>
       Bad: <span>{bad}</span>
      </StatisticsListItem>
      <StatisticsListItem>
       Total: <span>{total}</span>
      </StatisticsListItem>
      <StatisticsListItem>
       Positive feedback: <span>{positivePercentage}%</span>
      </StatisticsListItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
