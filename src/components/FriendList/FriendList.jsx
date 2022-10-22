import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'

import {FriendsList} from './FrendList.styled'
const FriendList = ({ friends }) => {
    return (
        <FriendsList class="friend-list">
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
        </FriendsList>
        )
    }   
FriendList.propTypes = {
    id: PropTypes.number.isRequired,
}
export default FriendList;