import PropTypes from 'prop-types';
import StatisticsList from './Statistics-list'
import{Section, Title, StatList} from './Statistics.styled'
const Statistics = ({ title, stats }) => {
    return (
        <Section>
            <Title>{title}</Title>

            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsList
                            key={id}
                            label={label}
                            percentage={percentage}
                        />
                    )
                })}
            </StatList>
        </Section>
    );
}

Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
      })
   ),
};

export default Statistics;