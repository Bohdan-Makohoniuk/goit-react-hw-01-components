import PropTypes from 'prop-types';
// import List from './FriendListItem'
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ul class="item">
            <span class="status"></span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </ul>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    // isOnline:
}
export default (FriendListItem);
