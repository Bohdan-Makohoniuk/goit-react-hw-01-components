import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(({ id, avatar, name, isOnline,}) => {
                return (
                    <FriendListItem 
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                        )
                    })
                }
        </ul>
        )
    }   
FriendList.propTypes = {
    id: PropTypes.number.isRequired,
}
export default FriendList;