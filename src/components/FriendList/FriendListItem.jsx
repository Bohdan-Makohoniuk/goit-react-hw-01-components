
import PropTypes from 'prop-types';
import {List, FrName, Status, StatusRed, StatusGreen} from './FrendList.styled'
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <List>
            <Status></Status>
            <img src={avatar} alt={name} width="48" />
            <FrName>{name}</FrName>
        </List>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    // isOnline:
}
export default (FriendListItem);



// { isOnline } ? <StatusRed /> : <StatusGreen />