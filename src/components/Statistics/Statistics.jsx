import PropTypes from 'prop-types';
import StatisticsList from './Statistics-list'

const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsList
                            key={id}
                            label={label}
                            percentage={percentage}
                        />
                    )
                })}
            </ul>
        </section>
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