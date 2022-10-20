import PropTypes from 'prop-types';

const StatisticsList = ({ label, percentage }) => {
    return (
        <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
    )
}

StatisticsList.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
};
export default StatisticsList;