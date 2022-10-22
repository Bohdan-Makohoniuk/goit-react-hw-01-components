import PropTypes from 'prop-types';
import{List, Percentage} from './Statistics.styled'
const StatisticsList = ({ label, percentage }) => {
    return (
        <List>
      <span>{label}</span>
      <Percentage>{percentage}%</Percentage>
    </List>
    ) 
}

StatisticsList.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
};
export default StatisticsList;