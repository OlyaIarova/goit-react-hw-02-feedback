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
        <span> Good:</span> <span>{good}</span>
      </StatisticsListItem>
      <StatisticsListItem>
        <span> Neutral:</span> <span>{neutral}</span>
      </StatisticsListItem>
      <StatisticsListItem>
        <span> Bad:</span> <span>{bad}</span>
      </StatisticsListItem>
      <StatisticsListItem>
        <span> Total:</span> <span>{total}</span>
      </StatisticsListItem>
      <StatisticsListItem>
        <span> Positive feedback:</span> <span>{positivePercentage}%</span>
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
