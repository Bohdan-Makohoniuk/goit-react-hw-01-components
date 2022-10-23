
import PropTypes from 'prop-types';
import {List, FrName, StatusGreen, StatusRed} from '../FriendListItem/FriendListItem.styled'
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <List>
            {isOnline ? <StatusGreen>{isOnline}</StatusGreen>:<StatusRed>{isOnline}</StatusRed>}
            <img src={avatar} alt={name} width="48" />
            <FrName>{name}</FrName>
        </List>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
}
export default (FriendListItem);


