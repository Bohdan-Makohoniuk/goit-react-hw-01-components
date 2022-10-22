

import PropTypes from 'prop-types';
import {List, FrName, Status, StatusRed, StatusGreen} from './FrendList.styled'
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <List class="item">
            <Status></Status>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <FrName class="name">{name}</FrName>
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